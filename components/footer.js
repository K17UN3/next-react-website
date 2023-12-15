import Container from "components/container"
import Logo from "./logo"
import Social from "components/social"
import styles from "styles/footer.module.css"

export default function Footer() {
  
  /* returnは絶対いる */
  return (
    <footer className={styles.wapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  );
}
