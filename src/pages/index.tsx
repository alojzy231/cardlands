import React from 'react';

import GenericCard from '@generic/cards/GenericCard';
import {
  HomepageContainer,
  HomepageSignature,
  HomepageSignatureLink,
} from '@generic/Homepage.styles';
import Sandbox from '@generic/Sandbox';

export default function Homepage(): JSX.Element {
  return (
    <HomepageContainer>
      <HomepageSignature>
        Made with ♥ by{' '}
        <HomepageSignatureLink href="https://damian-klos-resume.vercel.app/">
          Damian Kłos
        </HomepageSignatureLink>
      </HomepageSignature>

      <h1 style={{ textAlign: 'center' }}>Cardlands</h1>

      <Sandbox>
        <GenericCard />
      </Sandbox>
    </HomepageContainer>
  );
}
