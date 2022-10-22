import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Cabin&display=swap"
                        rel="stylesheet"
                    />
                    <meta name="robots" content="index, follow" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <Script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=UA-198230094-1"
                    />
                    <script
                        defer
                        type="text/javascript"
                        src="https://assets.calendly.com/assets/external/widget.js"
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                          
                            gtag('config', 'UA-198230094-1');`,
                        }}
                    />
                    <Script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-41KMBS1TNV"
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
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
