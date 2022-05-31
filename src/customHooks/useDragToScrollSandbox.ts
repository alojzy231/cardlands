/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect } from 'react';

import clamp from '@lib/clamp';
import { SANDBOX_MARGIN } from '@const/sandboxProperties';

const useDragToScrollSandbox = (
  sandboxRef: RefObject<HTMLDivElement>,
  container: RefObject<HTMLDivElement>,
  scale: number,
): void => {
  useEffect(() => {
    let howManyFingersOnSandbox = 0;
    let isDragging: boolean = false;
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const dragStart = (event: PointerEvent): void => {
      if (event.target === sandboxRef.current) {
        // can't assign false: this prevents from 'jumping' when more than one finger is on the sandbox
        isDragging = howManyFingersOnSandbox === 0;
        howManyFingersOnSandbox += 1;

        pos = {
          // the current scroll
          left: container.current!.scrollLeft,
          top: container.current!.scrollTop,
          // get the current mouse position
          x: event.clientX,
          y: event.clientY,
        };
      }
    };
    const dragStop = (): void => {
      isDragging = false;
      howManyFingersOnSandbox -= 1;
    };

    const dragMove = (event: PointerEvent): void => {
      if (isDragging) {
        const dx = event.clientX - pos.x;
        const dy = event.clientY - pos.y;

        const sandboxParams = sandboxRef.current!.getBoundingClientRect();

        const newScrollTop = clamp(
          pos.top - dy,
          0,
          sandboxParams.height - container.current!.clientHeight + 2 * SANDBOX_MARGIN,
        );
        const newScrollLeft = clamp(
          pos.left - dx,
          0,
          sandboxParams.width - container.current!.clientWidth + 2 * SANDBOX_MARGIN,
        );

        if (sandboxParams.width >= container.current!.clientWidth - SANDBOX_MARGIN) {
          container.current!.scrollLeft = newScrollLeft;
        }
        if (sandboxParams.height >= container.current!.clientHeight - SANDBOX_MARGIN) {
          container.current!.scrollTop = newScrollTop;
        }
      }
    };

    container.current!.addEventListener('pointerdown', dragStart);
    window.addEventListener('pointerup', dragStop);
    container.current!.addEventListener('pointermove', dragMove);

    return (): void => {
      container.current!.removeEventListener('pointerdown', dragStart);
      window.removeEventListener('pointerup', dragStop);
      container.current!.removeEventListener('pointermove', dragStop);
    };
  }, [sandboxRef]);

  useEffect(() => {
    const sandboxParams = sandboxRef.current!.getBoundingClientRect();

    // keep margin during scaling

    if (container.current!.clientWidth - sandboxParams.right > SANDBOX_MARGIN) {
      container.current!.scrollLeft =
        sandboxParams.width - container.current!.clientWidth + 2 * SANDBOX_MARGIN;
    }

    if (window.innerHeight - sandboxParams.bottom > SANDBOX_MARGIN) {
      container.current!.scrollTop =
        sandboxParams.height - container.current!.clientHeight + 2 * SANDBOX_MARGIN;
    }

    // prevent sandbox from exiting the viewport during scaling
    if (sandboxParams.width + sandboxParams.x < SANDBOX_MARGIN) {
      container.current!.scrollLeft = sandboxParams.width;
    }
    if (sandboxParams.height + sandboxParams.y < SANDBOX_MARGIN) {
      container.current!.scrollTop = sandboxParams.height;
    }

    // reset scroll position if sandbox smaller than the viewport
    if (sandboxParams.width < window.innerWidth) {
      container.current!.scrollLeft = 0;
    }
    if (sandboxParams.height < window.innerHeight) {
      container.current!.scrollTop = 0;
    }
  }, [scale]);
};

export default useDragToScrollSandbox;
