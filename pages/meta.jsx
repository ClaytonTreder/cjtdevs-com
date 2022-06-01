import Head from 'next/head'
import { useRouter } from 'next/router'
export default function Meta(params) {
    const router = useRouter()

    const url = 'https://cjtdevs.com'
    const route = params.route ?? router.pathname
    const description =
        'CJT Devs is a colletive of software developers looking to create your next website or mobile application.'

    return (
        <Head>
            <meta
                property="og:url"
                content={params.url ? `${params.url}` : `${url}${route}`}
            />
            <meta key="ogtype" property="og:type" content="article" />
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
                key="image"
                property="image"
                content={`${url}/${params.image ?? 'images/preview.png'}`}
            />
            <meta
                key="description"
                name="description"
                content={params.description ?? description}
            />
            <meta
                key="twititle"
                name="twitter:title"
                content={params.title ?? 'CJT Devs - Find your home page here'}
            />
            <meta
                key="twidescription"
                name="twitter:description"
                content={params.description ?? description}
            />
            <meta
                key="twiimage"
                name="twitter:image"
                content={`${url}/${params.image ?? 'images/preview.png'}`}
            />
            <meta name="twitter:card" content="summary_large_image" />
            <title>CJT Devs</title>
        </Head>
    )
}
