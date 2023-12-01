export function prevNextPost(allSlugs, currentSlug) {
    // 要素数を取得
    const numberOfPosts = allSlugs.length

    const index = allSlugs.findIndex(
        // 一致する記事のインデックスを取得
        ({ slug }) => slug === currentSlug,
    )

    const prevPost =
        index + 1 === numberOfPosts
            // 前の記事データをセット
            // 現在の記事が最後なら title と slug に空の値をセット
            ? { title: '', slug: '' }
            : allSlugs[index + 1]
    
    const nextPost =
        index === 0
            // 次の記事データをセット
            // 現在の記事が最後なら title と slug に空の値をセット
            ? { title: '', slug: '' }
            : allSlugs[index - 1]
    
    return [prevPost, nextPost]
}