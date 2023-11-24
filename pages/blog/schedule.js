import { client } from "lib/api"

export default function Schedule() {
    return <h1>記事のタイトル</h1>
}

export async function getStaticProps() {
    console.log('処理１')
    setTimeout(() => console.log("処理２"), 1000)
    console.log("処理３")

    return {
        props: {},
    }
}