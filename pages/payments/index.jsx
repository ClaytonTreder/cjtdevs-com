import styles from '../../styles/pages/Payments.module.css'
import Link from 'next/link'
import { attributes as text } from '!!frontmatter-markdown-loader!../../content/pages/payments.md'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PaymentForm from '../../components/PaymentForm'
import PendingPayment from '../../components/PendingPayment'

export default function Payments(params) {
    const [sucessfulPayment, setSucessfulPayment] = useState()
    const [pendingPayment, setPendingPayment] = useState()

    const loc = useRouter()

    useEffect(() => {
        if (loc.query?.session_id) {
            setSucessfulPayment(true)
        }
    }, [params, loc.query])

    return (
        <div className={styles.payments}>
            <div className="title">
                <h2>{text.title}</h2>
            </div>
            {sucessfulPayment ? (
                <div>
                    <section className={styles.success}>
                        <p>
                            Success! Your payment has been recieved and
                            processed.
                        </p>
                    </section>
                    <section className={styles.success}>
                        <p> Your confirmation number is:</p>
                    </section>
                    <section className={styles.success}>
                        <p> {loc.query.session_id}</p>
                    </section>
                    <section className={styles.success}>
                        <Link href="/">
                            <a>
                                <input type="button" value="Home" />
                            </a>
                        </Link>
                    </section>
                </div>
            ) : (
                <>
                    {pendingPayment ? (
                        <PendingPayment
                            pendingPayment={pendingPayment}
                            setPendingPayment={setPendingPayment}
                        />
                    ) : (
                        <PaymentForm setPendingPayment={setPendingPayment} />
                    )}
                </>
            )}
        </div>
    )
}
