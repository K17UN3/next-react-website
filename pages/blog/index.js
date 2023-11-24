import Meta from "@/components/meta"
import Conteiner from "components/container"
import Hero from "components/hero"

export default function Blog() {
  return (
    <Conteiner>
      <Meta pageTitle="ブログ" />
      <Hero title="Blog" subtitle="Recent Posts" />
    </Conteiner>
  )
}
