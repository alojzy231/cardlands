import React from 'react';
import PropTypes, { InferType } from 'prop-types';

import {
  GenericCardContainer,
  GenericCardTitle,
  GenericCardDivisionLine,
  TEMP,
  GenericCardStatSection,
} from './GenericCard.style';

export default function GenericCard({
  lifted,
}: InferType<typeof GenericCard.propTypes>): JSX.Element {
  return (
    <GenericCardContainer lifted={lifted}>
      <GenericCardTitle>GenericCard</GenericCardTitle>
      <GenericCardDivisionLine />
      <TEMP />
      <GenericCardDivisionLine />
      <GenericCardStatSection>test</GenericCardStatSection>
    </GenericCardContainer>
  );
}

GenericCard.propTypes = {
  lifted: PropTypes.bool,
};

GenericCard.defaultProps = {
  lifted: false,
};
