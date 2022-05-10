import type { NextPage } from 'next'
import Head from 'next/head'

import Breadcrumb from '../components/breadcrumb'
import Footer from '../components/footer'
import Header from '../components/header'
import ArticleList from '../components/article-list'
import Layout from '../components/layout'
import ContentContainer from '../components/content-container'
import Hero from '../components/hero'
import HeroBottom from '../components/hero-botton'

const Home: NextPage = () => {
  
  return (
    <>
    <Layout>
      <Head>
        <title>Chefdog.com</title>
        <meta name="description" content="Freelance Angular, React, .NET developer" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />                
      </Head>

      <Header></Header>
      
      <Hero></Hero>
      <HeroBottom></HeroBottom>

      <ArticleList></ArticleList>

      <Footer></Footer>
      </Layout>
    </>
  )
}

export default Home
