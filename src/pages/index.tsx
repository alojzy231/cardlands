import React from 'react';

import {
  HomepageContainer,
  HomepageTitle,
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

      <HomepageTitle>Cardlands</HomepageTitle>

      <Sandbox>
        <div />
      </Sandbox>
    </HomepageContainer>
  );
}
