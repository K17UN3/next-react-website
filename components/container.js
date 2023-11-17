import styles from 'styles/conteiner.module.css'

export default function Conteiner({ children, large = false }) {
    return (
        <div className={large ? styles.large : styles.default}>
            {children}
        </div>
    )
}