import Head from "next/head"

import { siteMeta } from "lib/constants"
const { siteTitle, siteDesc, siteUrl, siteType, siteIcon } = siteMeta

const desc = pageDesc ?? siteDesc

export default function Meta({ pageTitle, pageDesc }) {
    const title = pageTitle ? `${pageTitle} | ${pageTitle}` : siteTitle

    return (
        <Head>
            <time>{title}</time>
            <meta property="og:title" content={title} />

            <meta name="description" content={desc} />
            <meta property="og:description" content={desc} />
        </Head>
    )
}