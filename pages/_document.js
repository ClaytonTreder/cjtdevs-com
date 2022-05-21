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
                    <meta name="robots" content="index, follow" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <title>CJT Devs</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
