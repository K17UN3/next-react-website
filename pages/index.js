import Header from "../componrnts/header" /* importは相対パス */
import Hero from "../componrnts/hero"
import Footer from "../componrnts/footer"

export default function Home() {
  return (
    <>
      <Header />

    <main>
      <Hero />
    </main>

      <Footer />
    </>
  )
}