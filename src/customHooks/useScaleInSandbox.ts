/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { SANDBOX_MAX_SCALE, SANDBOX_MIN_SCALE, SANDBOX_SCALE_GAP } from '@const/sandboxProperties';

const useScaleInSandbox = (): number => {
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const changeScaleWithWheel = (event: WheelEvent): void => {
      const difference = Math.sign(Math.round(event.deltaY)) * SANDBOX_SCALE_GAP;

      setScale((prevScale) => {
        const newScale = Number((prevScale - difference).toPrecision(3));

        if (SANDBOX_MIN_SCALE <= newScale && newScale <= SANDBOX_MAX_SCALE) {
          return newScale;
        }

        return prevScale;
      });
    };

    window.addEventListener('wheel', changeScaleWithWheel);

    return () => {
      window.removeEventListener('wheel', changeScaleWithWheel);
    };
  }, [scale]);

  return scale;
};

export default useScaleInSandbox;
