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
                        property="og:title"
                        content="CJT Devs - Find your home page here"
                    />
                    <meta property="og:url" content="https://next-test.cjtdevs.com/" />
                    <meta
                        property="og:description"
                        content="CJT Devs is a colletive of software developers looking to create your next website or mobile application."
                    />
                    <meta
                        property="og:image"
                        content="%PUBLIC_URL%/images/preview.png"
                    />
                    <meta name="robots" content="index, follow" />
                    <meta
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
