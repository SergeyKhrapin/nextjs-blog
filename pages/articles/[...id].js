import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Article3() {
    const router = useRouter()
    console.log(router)
    return (
        <>
            <h1>This is [...id].js</h1>
            <h3>id { router.query.id }</h3>
            <Link href="/">
                <a>Back to Home</a>
            </Link>
        </>
    )
}
