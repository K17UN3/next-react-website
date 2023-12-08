import { getAllPosts } from "lib/api"
import Meta from "components/meta"
import Conteiner from "components/container"
import Hero from "components/hero"
import Posts from "components/posts"
import Pagination from "components/pagination"
import { getPlaiceholder } from "plaiceholder"

import { eyecatchLocal } from "lib/constants"

export default function Home({ posts }) {
  return (
    <Conteiner>
      <Meta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />

      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More Posts" />
    </Conteiner>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts(4)
  
  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { bace64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts,
    },
  }
}