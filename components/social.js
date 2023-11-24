import styles from 'styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faFacebookF,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'

export default function Social({ iconSize = 'initial' }) {
    return (
    <ul className={styles.list} style={{ '--icon-size': iconSize }}>
        <li href="https://teitter.com/">
            <FontAwesomeIcon icon={faTwitter} />
            <span className="sr-only">Twitter</span>
        </li>
        <li href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebookF} />
            <span className="sr-only">Facebook</span>
        </li>
        <li href="https://github.com/">
            <FontAwesomeIcon icon={faGithub} />
            <span className="sr-only">Github</span>
        </li>
    </ul>
    );
}