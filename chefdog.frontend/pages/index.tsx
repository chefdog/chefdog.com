import type { NextPage } from 'next'
import Head from 'next/head'

import Breadcrumb from '../components/breadcrumb'
import Footer from '../components/footer'
import Header from '../components/header'
import ArticleList from '../components/article-list'
import PostList from '../components/post-list'
import TagList from '../components/tag-list'
import Layout from '../components/layout'
import ContentContainer from '../components/content-container'

const Home: NextPage = () => {
  
  return (
    <>
    <Layout>
      <Head>
        <title>Chefdog.com</title>
        <meta name="description" content="Freelance Angular, React, .NET developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      

      <ContentContainer>
        <Breadcrumb></Breadcrumb>
      
        <section id="blog-section" className="blog-section sec-ptb-100 clearfix">
          <div className='container'>
            <div className="row justify-content-lg-between justify-content-md-center justify-content-sm-center">
              <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">

                <ArticleList></ArticleList>
              </div>

              <div className="col-lg-3 col-md-5 col-sm-12 col-xs-12">
                <aside id="sidebar-section" className="sidebar-section">
                </aside>
              </div>
            </div>
          </div> 
        </section>
      </ContentContainer>
      <Footer></Footer>
      </Layout>
    </>
  )
}

export default Home
