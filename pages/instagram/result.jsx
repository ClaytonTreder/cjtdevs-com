import Link from 'next/link'

export default function Result() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0 20%',
                marginTop: '2%',
                marginBottom: '20%',
            }}
        >
            <h4>Your information has been saved!</h4>
            <span>
                Please let your developer know and they will verify the
                information provided.
            </span>
            <Link href="/">
                <u>Home</u>
            </Link>
        </div>
    )
}
