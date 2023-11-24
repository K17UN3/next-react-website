import Meta from "/components/meta"
import Conteiner from "components/container"
import Hero from "components/hero"

export default function Blog() {
  return (
    <Conteiner>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
      <Hero title="Blog" subtitle="Recent Posts" />
    </Conteiner>
  )
}
