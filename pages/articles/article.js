import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Article() {
    const router = useRouter()
    console.log(router)
    return (
        <>
            <h1>This is article.js</h1>
            <h3>id { router.query.id }</h3>
            <Link href="/">
                <a>Back to Home</a>
            </Link>
        </>
    )
}
