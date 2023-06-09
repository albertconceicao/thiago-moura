import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app'
import theme  from '@/styles/theme';
import GlobalStyles from '../styles/global';
import { ChakraProvider } from '@chakra-ui/react';
export default function App({ Component, pageProps }: AppProps) {
  return (

    <ChakraProvider>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </ChakraProvider>
  );
}
