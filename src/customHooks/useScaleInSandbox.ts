/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect, useState } from 'react';

import {
  SANDBOX_MAX_SCALE,
  SANDBOX_MIN_SCALE,
  SANDBOX_MOUSEWHEEL_SCALE_GAP,
  SANDBOX_PINCH_SCALE_GAP,
  SANDBOX_PINCH_SCALE_THRESHOLD,
} from '@const/sandboxParameters';
import clamp from '@lib/clamp';

let pointerEventsCache: PointerEvent[] = [];

const useScaleInSandbox = (containerRef: RefObject<HTMLDivElement>): number => {
  const [scale, setScale] = useState<number>(1);

  let prevDistanceBetweenPointers: number | null = null;

  useEffect(() => {
    const changeScaleWithWheel = (event: WheelEvent): void => {
      const difference = Math.sign(Math.round(event.deltaY)) * SANDBOX_MOUSEWHEEL_SCALE_GAP;

      setScale((prevScale: number): number => {
        const newScale = Number((prevScale - difference).toPrecision(3));

        if (SANDBOX_MIN_SCALE <= newScale && newScale <= SANDBOX_MAX_SCALE) {
          return newScale;
        }

        return prevScale;
      });
    };

    const savePointerEventToCache = (event: PointerEvent): void => {
      if (pointerEventsCache.length < 2) {
        pointerEventsCache.push(event);
      }
    };

    const removeCachePointerEvent = (event: PointerEvent): void => {
      pointerEventsCache = pointerEventsCache.filter(
        (pointerEvent: PointerEvent): boolean => pointerEvent.pointerId !== event.pointerId,
      );
    };

    const handleTouchUp = (event: PointerEvent): void => {
      removeCachePointerEvent(event);

      prevDistanceBetweenPointers = null;
    };

    const updatePointerEventCache = (event: PointerEvent): PointerEvent[] =>
      pointerEventsCache.map((pointerEvent: PointerEvent): PointerEvent => {
        if (pointerEvent.pointerId === event.pointerId) {
          const distanceFromPrevPosition: number = Math.hypot(
            pointerEvent.x - event.x,
            pointerEvent.y - event.y,
          );

          if (distanceFromPrevPosition > SANDBOX_PINCH_SCALE_THRESHOLD) {
            return event;
          }
        }

        return pointerEvent;
      });

    const changeScaleWithPinch = (event: PointerEvent): void => {
      if (pointerEventsCache.length === 2) {
        pointerEventsCache = updatePointerEventCache(event);

        const distanceBetweenPointers = Math.hypot(
          pointerEventsCache[0].x - pointerEventsCache[1].x,
          pointerEventsCache[0].y - pointerEventsCache[1].y,
        );

        if (prevDistanceBetweenPointers) {
          // positive if distance is greater (zoom in), negative if distance is smaller (zoom out) and 0 for idle state
          const directionOfPinch = Math.sign(distanceBetweenPointers - prevDistanceBetweenPointers);

          if (directionOfPinch !== 0) {
            setScale((prevScale: number): number =>
              clamp(
                prevScale + directionOfPinch * SANDBOX_PINCH_SCALE_GAP,
                SANDBOX_MIN_SCALE,
                SANDBOX_MAX_SCALE,
              ),
            );
          }
        }

        prevDistanceBetweenPointers = distanceBetweenPointers;
      }
    };

    window.addEventListener('wheel', changeScaleWithWheel);
    containerRef.current!.addEventListener('pointerdown', savePointerEventToCache);
    containerRef.current!.addEventListener('pointerup', handleTouchUp);
    containerRef.current!.addEventListener('pointermove', changeScaleWithPinch);

    return () => {
      window.removeEventListener('wheel', changeScaleWithWheel);
      containerRef.current!.removeEventListener('pointerdown', savePointerEventToCache);
      containerRef.current!.removeEventListener('pointerup', handleTouchUp);
      containerRef.current!.removeEventListener('pointermove', changeScaleWithPinch);
    };
  }, [scale]);

  return scale;
};

export default useScaleInSandbox;
