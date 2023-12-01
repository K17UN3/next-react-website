import styles from 'styles/pagination.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Pagination({
    prevText = '',
    prevUrl = '',
    nextText = '',
    nextUrl = '',
}) {
    // 17 25 aタグ外し
    return (
        <ul className={styles.flexContainer}>
            {prevText && prevUrl && (
                <li className={styles.prev}>
                    <Link href={prevUrl} className={styles.iconTxt}>
                        <FontAwesomeIcon icon={faChevronLeft} color='var(--gray-25)' />
                        <span>{prevText}</span>
                    </Link>
                </li>
            )}
            {nextText && nextUrl && (
                <li className={styles.next}>
                    <Link href={nextUrl} className={styles.iconTxt}>
                        <span>{nextText}</span>
                        <FontAwesomeIcon icon={faChevronLeft} color='var(--gray-25)' />
                    </Link>
                </li>
            )}
        </ul>
    )
}