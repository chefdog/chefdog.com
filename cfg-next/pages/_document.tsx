import Document, { Html, Head, Main, NextScript } from 'next/document'
import { useRouter } from 'next/router'

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