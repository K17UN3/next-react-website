import styles from 'styles/conteiner.module.css'

export default function Conteiner({ children, large = false }) {
    return (
        <div className={styles.stack}>
            <h3 className={styles.heading}>Contact</h3>
            <address>cube@web.mail.address</address>
        </div>
    )
}