import { createClient } from "microcms-js-sdk"

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KYE
})

export async function getPostBySlug(slug) {
    try {
        const post = await client.get({
            endpoint: 'blogs',
            queries: { filters: `slug[equals]${slug}` },
        })
        return post.constents[0]
    } catch (err) {
      // エラー処理
        console.log("~~ getPostBySlug ~~");
        console.log(err)
    }
}