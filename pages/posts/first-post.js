import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

console.log('FIRST_POST')

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First post</title>
            </Head>
            <h1>First Post</h1>
            <Link href="/">
                <a>Back to Home</a>
            </Link>
        </Layout>
    )
}
