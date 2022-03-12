import type { NextPage } from 'next'
import Head from 'next/head'
import Breadcrumb from '../components/breadcrumb'
import Footer from '../components/footer'
import Header from '../components/header'

import styles from '../styles/Home.module.css'

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

      <Footer></Footer>
    </>
  )
}

export default Home
