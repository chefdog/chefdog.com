import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Client from '../lib/apollo-client'
import '../styles/style.scss'


function MyApp({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={Client}>
      <Component {...pageProps} />
  </ApolloProvider>
}

export default MyApp
