import Head from 'next/head'
import '../styles/globals.css'
import Layout from './layout'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    property="og:url"
                    content="https://zesty-selkie-1384ae.netlify.app"
                />
                <meta
                    key="ogtitle"
                    property="og:title"
                    content="CJT Devs - Find your home page here"
                />
                <meta
                    key="ogdescription"
                    property="og:description"
                    content="CJT Devs is a colletive of software developers looking to create your next website or mobile application."
                />
                <meta
                    key="ogimage"
                    property="og:image"
                    content="/images/preview.png"
                />
                <meta
                    key="description"
                    name="description"
                    content="CJT Devs is a colletive of software developers looking to create your next website or mobile application."
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
