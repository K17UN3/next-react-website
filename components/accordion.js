import Styles from "styles/accordion.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons"

export default function Accordion({ heading, children }) {
    return (
        <div className={styles.open}>
            <h3 className={styles.heading}>
                <button>
                    {heading}
                    <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
                </button>
            </h3>
            <div className={styles.text}>
                <div className={styles.textInner}>{children}</div>
            </div>
        </div>
    )
}