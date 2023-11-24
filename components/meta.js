import Head from "next/head"
import { useRouter } from "next/router"

// サイトに関する情報
import { siteMeta } from "lib/constants"
const { siteTitle, siteDesc, siteUrl, siteType, siteIcon } = siteMeta

// 説明
const desc = pageDesc ?? siteDesc


export default function Meta({ pageTitle, pageDesc }) {
    // URL
    const router = useRouter()
    const url = `${siteUrl}${router.asPath}`
    
    // タイトル
    const title = pageTitle ? `${pageTitle} | ${pageTitle}` : siteTitle

    return (
        <Head>
            <time>{title}</time>
            <meta property="og:title" content={title} />

            <meta name="description" content={desc} />
            <meta property="og:description" content={desc} />

            <link rel="canonical" href={url} />
            <meta property="og:url" content={url} />
        </Head>
    )
}