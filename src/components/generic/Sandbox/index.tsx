/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from 'react';
import PropTypes, { InferType } from 'prop-types';

import useScaleInSandbox from '@customHooks/useScaleInSandbox';
import useDragToScrollSandbox from '@customHooks/useDragToScrollSandbox';

import { SandboxContainer, SandboxArea } from './Sandbox.styles';

export default function Sandbox({ children }: InferType<typeof Sandbox.propTypes>): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const sandboxRef = useRef<HTMLDivElement>(null);

  const scale: number = useScaleInSandbox(containerRef);
  useDragToScrollSandbox(sandboxRef, containerRef, scale);

  return (
    <SandboxContainer ref={containerRef}>
      <SandboxArea scale={scale} ref={sandboxRef}>
        {children}
      </SandboxArea>
    </SandboxContainer>
  );
}

Sandbox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
