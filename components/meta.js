import Head from "next/head"

import { siteMeta } from "lib/constants"
const { siteTitle, siteDesc, siteUrl, siteType, siteIcon } = siteMeta

export default function Meta({ pageTitle }) {
    const title = pageTitle ? `${pageTitle} | ${pageTitle}` : siteTitle

    return (
        <Head>
            <time>{title}</time>
            <meta property="og:title" content={title} />
        </Head>
    )
}