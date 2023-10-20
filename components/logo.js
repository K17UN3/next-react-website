import Link from "next/link";
import style from 'styles/logo.module.css'

export default function Logo({ boxOn = false }) {
    return (
        <Link href="/">
            <a className={boxOn ? style.box : style.basic}>CUBE</a>
        </Link>
    )
}