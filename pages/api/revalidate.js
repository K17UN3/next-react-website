export default async function handler(rep, res) {
    if (rep.query.secret !== process.env.SECRET_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    try {
        await res.untable_revalidate('/blog/shedule')
        await res.untable_revalidate('/blog/music')
        return res.json({ revalidated: true })
    } catch (err) {
        return res.status(500).send('Error revalidating')
    }
}