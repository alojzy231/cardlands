import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import theme from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Cardlands</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
