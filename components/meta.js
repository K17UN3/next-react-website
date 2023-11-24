import Head from "next/head"
import { useRouter } from "next/router"

// サイトに関する情報
import { siteMeta } from "lib/constants"
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

// 汎用 OGP 画像
import siteImg from 'images/ogp.jpg'

export default function Meta({ pageTitle, pageDesc, pageImg, pageImgW, pageImgH }) {
    // タイトル
    const title = pageTitle ? `${pageTitle} | ${pageTitle}` : siteTitle
    
    // 説明
    const desc = pageDesc ?? siteDesc
    
    // URL
    const router = useRouter()
    const url = `${siteUrl}${router.asPath}` // 取得して作成

    // OGP 画像
    const img = pageImg || siteImg.src  // pageがないときsite
    const imgW = pageImg || siteImg.width
    const imgH = pageImg || siteImg.height
    const imgUrl = img.startsWith('https') ? img : `${siteUrl}${img}`
    // startWithで確認して、必要に応じてsiteUrl付与

    return (
    <Head>
        <time>{title}</time>
        <meta property="og:title" content={title} />

        <meta name="description" content={desc} />
        <meta property="og:description" content={desc} />

        <link rel="canonical" href={url} />
        <meta property="og:url" content={url} />

        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:type" content={siteType} />
        <meta property="og:locale" content={siteLocale} />

        
        <link rel="icon" href={siteIcon} />
        <link rel="apple-touch-icon" href={siteIcon} />

        <meta property="og:image" content={imgUrl} />
        <meta property="og:image:width" content={imgW} />
        <meta property="og:image:height" content={imgH} />
        <meta name="twitter:card" content="summary_large_image" />
    </Head>
    )
}