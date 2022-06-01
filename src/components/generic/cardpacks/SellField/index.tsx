import React from 'react';

import { SellFieldCoins, SellFieldContainer, SellFieldName } from './SellField.styles';

export default function SellField(): JSX.Element {
  return (
    <SellFieldContainer>
      <SellFieldName>Sell</SellFieldName>
      <SellFieldCoins />
    </SellFieldContainer>
  );
}
