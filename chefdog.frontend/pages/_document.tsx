import Document, { Html, Head, Main, NextScript } from 'next/document'
import { useRouter } from 'next/router'

export default class MyDocument extends Document {  
  render() {    
    return (      
      <Html lang="nl">
        <Head>
          <meta name="description" content="Freelance Angular, React, .NET developer" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=optional" rel="stylesheet" />                
        </Head>      
        <body className="leading-normal tracking-normal text-white gradient cfg">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}