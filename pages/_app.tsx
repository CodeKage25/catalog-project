import { GlobalStyles } from '../styles/global';
import "../styles/global.ts"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <GlobalStyles />
    <Component {...pageProps} />
    </>)
}
