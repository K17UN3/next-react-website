import Conteiner from "components/container"
import Logo from "./logo"
import styles from "styles/footer.module.css"
import Social from "components/social"

export default function Footer() {
  return (
    <footer className={styles.wapper}>
      <Conteiner>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Conteiner>
    </footer>
  );
}
