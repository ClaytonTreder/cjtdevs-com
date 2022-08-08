import Link from 'next/link'

export default function BlogPost() {
    return (
        <>
            <div>
                <div
                    className="flex-row"
                    style={{ marginBottom: '20%', padding: '2% 20%' }}
                >
                    <div
                        className="column"
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <h4>Legal Info</h4>
                        <Link href="/legal/privacy-policy">
                            <u>Privacy Policy</u>
                        </Link>
                        <Link href="/legal/terms-of-service">
                            <u>Terms of Service</u>
                        </Link>
                        <Link href="/legal/user-info-deletion-instructions">
                            <u>User info deltion instructions</u>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
