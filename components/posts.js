import styles from 'styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Posts({ posts }) {
    return (
        <div className={styles.gridContainer}>
            {Posts.map(({ title, slug, eyecatch }) => {
                <article className={styles.post} key={slug}>
                    <Link herf={`/blog/${slug}`}>
                        <figure>
                            <Image
                                src={eyecatch.url}
                                alt=''
                                layout='responsive'
                                width={eyecatch.width}
                                height={eyecatch.height}
                                placeholder='blue'
                                blurDataURL={eyecatch.blurDataURL}
                            />
                        </figure>
                        <h2>{title}</h2>
                    </Link>
                </article>
            })}
        </div>
    )
}