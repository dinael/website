import type { AppProps } from 'next/app'
import '@component/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
