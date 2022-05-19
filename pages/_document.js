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
