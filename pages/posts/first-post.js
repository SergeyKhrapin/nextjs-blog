import Link from 'next/link'

console.log('FIRST_POST');

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <Link href="/">
                <a>Back to Home</a>
            </Link>
        </>
    )
}
