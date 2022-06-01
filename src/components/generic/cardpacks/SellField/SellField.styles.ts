import styled from 'styled-components';

import CoinsIcon from '@icons/CoinsIcon';

export const SellFieldContainer = styled.div`
  width: 14.8rem;
  height: 21rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 0.2rem dashed ${({ theme: { colors } }): string => colors.black};
`;
export const SellFieldName = styled.h4`
  margin-bottom: 2rem;
`;
export const SellFieldCoins = styled(CoinsIcon)`
  transform: scale(2.7);
`;
