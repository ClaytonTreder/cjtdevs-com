import Head from 'next/head'
export default function Meta(params) {
    const description =
        'CJT Devs is a colletive of software developers looking to create your next website or mobile application.'
    return (
        <Head>
            <meta
                property="og:url"
                content={params.url ?? 'https://cjtdevs.com/'}
            />
            <meta
                key="ogtitle"
                property="og:title"
                content={params.title ?? 'CJT Devs - Find your home page here'}
            />
            <meta
                key="ogdescription"
                property="og:description"
                content={params.description ?? description}
            />
            <meta
                key="ogimage"
                property="og:image"
                content={`${params.url?? 'https://cjtdevs.com'}${params.image ?? '/images/preview.png'}`}
            />
            <meta
                key="description"
                name="description"
                content={params.description ?? description}
            />
        </Head>
    )
}
