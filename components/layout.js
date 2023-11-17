import Conteiner from 'components/container'
import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main>
        <Conteiner>{children}</Conteiner>
      </main>

      <Footer />
    </>
  );
}