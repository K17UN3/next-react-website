import Conteiner from 'components/container'
import Logo from './logo'
import Nav from './nav'
import styles from 'styles/header.module.css'

export default function Header() {
  return (
    <header>
      <Conteiner large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Conteiner>
    </header>
  );
}