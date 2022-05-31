import styled from 'styled-components';

import { SANDBOX_HEIGHT, SANDBOX_MARGIN, SANDBOX_WIDTH } from 'src/const/sandboxProperties';

export const SandboxContainer = styled.div`
  width: 100%;

  flex-grow: 1;

  overflow: hidden;

  touch-action: none;
`;

interface ISandboxArea {
  scale: number;
}

export const SandboxArea = styled.div<ISandboxArea>`
  width: ${SANDBOX_WIDTH};
  height: ${SANDBOX_HEIGHT};

  margin: ${SANDBOX_MARGIN}px;

  position: relative;

  background-image: url('./sandFolds.png'), linear-gradient(180deg, #faffdf 0%, #ffeeba 100%);

  border: 0.4rem solid ${({ theme: { colors } }): string => colors.black};

  box-shadow: -15px 19px 30px rgba(0, 0, 0, 0.25);

  transform-origin: left top;
  transform: ${({ scale }): string => `scale(${scale})`};
`;
