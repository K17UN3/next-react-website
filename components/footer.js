import Conteiner from "components/container"
import Logo from "./logo"
import styles from "styles/footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.wapper}>
      <Conteiner>
        <div className={styles.flexContainer}>
          <Logo />
          [ソーシャル]
        </div>
      </Conteiner>
    </footer>
  );
}
