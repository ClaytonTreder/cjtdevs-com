import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Cabin"
                        rel="stylesheet"
                    />
                    <meta
                        property="og:url"
                        content="https://zesty-selkie-1384ae.netlify.app"
                    />
                    <meta name="robots" content="index, follow" />
                </Head>
                <title>CJT Devs</title>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
