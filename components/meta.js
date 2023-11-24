import Head from "next/head"

export default function Meta({ pageTitle }) {
    return (
        <Head>
            <time>{pageTitle}</time>
            <meta property="'og:title" content={pageTitle} />
        </Head>
    )
}