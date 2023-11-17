import style from 'styles/post-body.module.css'

export default function PostBody({ children }) {
    return (
        <div className={style.stack}>
            {children}
        </div>
    )
}