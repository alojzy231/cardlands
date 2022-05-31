import styled from 'styled-components';

export const HomepageContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const HomepageTitle = styled.h1`
  text-align: center;
`;

export const HomepageSignature = styled.h6`
  margin: 1.2rem 1.2rem 1.2rem auto;
`;
export const HomepageSignatureLink = styled.a`
  color: ${({ theme: { colors } }): string => colors.black};

  font-weight: bold;
  text-decoration: none;

  white-space: nowrap;

  &:hover {
    opacity: 0.8;

    cursor: pointer;
  }
  &:active {
    opacity: 0.6;
  }
`;
