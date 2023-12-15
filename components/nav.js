import { useState } from 'react'
import Link from "next/link";
import styles from 'styles/nav.module.css'

export default function Nav() {
  const [navIsOpne, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  return (
    <nav className={navIsOpne ? styles.open : styles.close}>
      <button className={styles.btn} onClick={toggleNav}>
        MENU
      </button>

      <ul className={styles.list}>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}