import styles from 'styles/post-header.module.css'

export default function PostHeader({ title, subtitle, publish = '' }) {
    return (
        <div className={styles.stack}>
            <p className={styles.subtitle}>{subtitle}</p>
            <h1 className={styles.title}>{title}</h1>
            {publish && <div className={styles.publish}>{ publish }</div>}
        </div>
    )
}