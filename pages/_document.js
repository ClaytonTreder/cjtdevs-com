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
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=UA-198230094-1"
                    />

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                          
                            gtag('config', 'UA-198230094-1');`,
                        }}
                    />
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-41KMBS1TNV"
                    ></script>
                    <script
                        dangerouslySetInnerHTML={{
                            html: `window.dataLayer = window.dataLayer || [];
                                   function gtag(){dataLayer.push(arguments);}
                                   gtag('js', new Date());
                                   gtag('config', 'G-41KMBS1TNV');`,
                        }}
                    />
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
