import Meta from "components/meta"
import Conteiner from "components/container"
import Hero from "components/hero"

export default function Home() {
  return (
    <Conteiner>
      <Meta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
    </Conteiner>
  );
}