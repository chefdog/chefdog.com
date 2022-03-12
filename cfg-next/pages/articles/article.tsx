import Link from 'next/link'
import Head from 'next/head'

import Layout from '../../components/Layout';

export default function FirstArticle() {
    return <Layout>
        <Head>
            <title>Article</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>First Article</h1>
        <h2>
            <Link href="/">
                <a>back</a>
            </Link>
        </h2>
    </Layout>
}