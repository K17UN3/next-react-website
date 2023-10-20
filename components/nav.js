import Link from "next/link";
import style from 'styles/nav.module.css'

export default function Nav() {
  return (
    <nav>
      <ul className={style.list}>
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