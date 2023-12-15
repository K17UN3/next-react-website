import { getAllCategories } from 'lib/api'
import { Container } from 'components/Container'
import PostHeader from 'components/post-Header'

export default function Categories({ name }) {
    return (
        <Container>
            <PostHeader title={name} subtitle="Blog Category" />
        </Container>
    )
}

export async function getStaticPaths() {
    const allCats = await getAllCategories()
    return {
        paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const catSlug = context.param.slulg

    const allCats = await getAllCategories()
    const cat = allCats.find(({ slug }) => slug === catSlug)

    return {
        props: {
            name: cat.name,
        },
    }
}