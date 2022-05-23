import '../styles/global.css'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import Client from '../lib/apollo-client'

export default function App({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={Client}>
      <Component {...pageProps} />
  </ApolloProvider>
}
