import type { NextPage } from 'next'
import Head from 'next/head'

import Breadcrumb from '../components/breadcrumb'
import Footer from '../components/footer'
import Header from '../components/header'

import styles from '../styles/Home.module.css'
import ArticleList from '../components/article-list'
import PostList from '../components/post-list'

const Home: NextPage = () => {
  

  return (
    <>
      <Head>
        <title>Chefdog.com</title>
        <meta name="description" content="Freelance Angular, React, .NET developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <Breadcrumb></Breadcrumb>
      <section id="blog-section" className="blog-section sec-ptb-100 clearfix">
        <div className='container'>
          <div className="row justify-content-lg-between justify-content-md-center justify-content-sm-center">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <PostList></PostList>
              <ArticleList></ArticleList>
            </div>
          </div>
        </div> 
      </section>
      
      <Footer></Footer>
    </>
  )
}

export default Home
