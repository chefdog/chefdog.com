import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="nl">
        <Head />
        <body className="blog-page">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}