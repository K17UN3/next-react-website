import styles from 'styles/container.module.css'

export default function Conteiner({ children, large = false }) {
    return (
        <div className={large ? styles.large : styles.default}>
            {children}
        </div>
    )
}