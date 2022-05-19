import Head from 'next/head'
import '../styles/globals.css'
import Layout from './layout'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
