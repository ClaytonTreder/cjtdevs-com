import '../styles/globals.css'
import Layout from './layout'
import Meta from './meta'

function MyApp({ Component, pageProps }) {
    return (
        <>
        <Meta
            url="https://zesty-selkie-1384ae.netlify.app"
            title="CJT Devs - Find your home page here"
        />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
