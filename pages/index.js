import Header from "../components/header" /* importは相対パス */
import Hero from "../components/hero"
import Footer from "../components/footer"

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