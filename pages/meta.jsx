import Head from 'next/head'
export default function Meta(params) {
    const url = 'https://zesty-selkie-1384ae.netlify.app'
    const description =
        'CJT Devs is a colletive of software developers looking to create your next website or mobile application.'
    return (
        <Head>
            <meta
                property="og:url"
                content={params.url ? `${url}${params.url}` : url}
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
                content={`${url}/${params.image ?? 'images/preview.png'}`}
            />
            <meta
                key="description"
                name="description"
                content={params.description ?? description}
            />
        </Head>
    )
}
