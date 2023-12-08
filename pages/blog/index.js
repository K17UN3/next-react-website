import { getAllPosts } from "lib/api"
import Meta from "components/meta"
import Conteiner from "components/container"
import Hero from "components/hero"
import Posts from 'components/posts'
import { getPlaiceholder } from "plaiceholder"

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from "lib/constants"

// Blogコンポーネント
export default function Blog({ posts }) {
  return (
    <Conteiner>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
      <Hero title="Blog" subtitle="Recent Posts" />

      <Posts posts={posts} />
    </Conteiner>
  )
}

// getStaticProps
export async function getStaticProps() {
  const posts = await getAllPosts()

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