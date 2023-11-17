import Link from "next/link";
import style from 'styles/logo.module.css'

export default function Logo({ boxOn = false }) {
    return (
      <Link href="/" className={boxOn ? style.box : style.basic}>
        CUBE
      </Link>
    );
}