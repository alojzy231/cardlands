import styled from 'styled-components';

interface IGenericCardContainer {
  lifted: boolean;
}

export const GenericCardContainer = styled.div<IGenericCardContainer>`
  //temp
  margin: 1.5rem;
  background-color: ${({ theme: { colors } }): string => colors.cards.resourceCard};
  //

  width: 14.8rem;
  height: 21rem;

  padding: 0.6rem 0.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 0;
  left: 0;

  transform: translate(-50%, -50%);

  user-select: none;

  border-radius: 1.5rem;

  filter: ${({ lifted }): string =>
    lifted
      ? 'drop-shadow(-10px 10px 6px rgba(0, 0, 0, 0.25))'
      : 'drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.25))'};

  &:hover {
    cursor: ${({ lifted }): string => (lifted ? 'grabbing' : 'grab')};
  }
`;

export const GenericCardTitle = styled.h6``;
export const GenericCardDivisionLine = styled.div`
  width: 100%;
  height: 0.2rem;

  background-color: ${({ theme: { colors } }): string => colors.black};

  opacity: 0.2;
`;

export const TEMP = styled.div`
  width: 14rem;
  aspect-ratio: 1 / 1;

  background-color: #d9d9d9;
`;

export const GenericCardStatSection = styled.div`
  width: 100%;
  height: 2rem;

  padding: 0 1.3rem;

  display: flex;
  justify-content: space-between;
`;
