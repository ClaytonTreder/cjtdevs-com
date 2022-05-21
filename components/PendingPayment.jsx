import { useState, useEffect } from 'react'
import styles from '../styles/components/PendingPayment.module.css'
import Picture from './Picture'

export default function PendingPayment(params) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [paymentAmount, setPaymentAmount] = useState()
    const [interval, setInterval] = useState()

    const calcPayment = () => {
        switch (interval) {
            case 'quarterly':
                return paymentAmount * 3
            case 'yearly':
                return paymentAmount * 12
            default:
                return paymentAmount
        }
    }

    const submit = async () => {
        setLoading(true)
        fetch('/.netlify/functions/payments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                paymentAmount: calcPayment(),
                interval,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                window.location.href = data.location
            })
            .catch(() =>
                setError(
                    'An error occured, you have not been charged. Please contact your developer.'
                )
            )
            .finally(() => setLoading(false))
    }

    const cancel = () => {
        params.setPendingPayment(undefined)
    }

    const calcInterval = () => {
        switch (interval) {
            case 'monthly':
                return 'every month, starting today'
            case 'quarterly':
                return 'every three months, starting today'
            case 'yearly':
                return 'every year, starting today'
            default:
                return 'today only'
        }
    }
    const getInterval = () => {
        switch (interval) {
            case 'monthly':
                return 'Monthly'
            case 'quarterly':
                return 'Quarterly'
            case 'yearly':
                return 'Yearly'
            default:
                return 'One time'
        }
    }

    useEffect(() => {
        setPaymentAmount(params.pendingPayment.paymentAmount)
        setInterval(params.pendingPayment.interval)
    }, [params.pendingPayment.paymentAmount, params.pendingPayment.interval])

    return (
        <div className={styles.pendingPayment}>
            <section>
                <hr />
                <h4>Payment Amount: </h4>
                <span>
                    {Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(paymentAmount)}
                </span>
                <hr />
                <h4>Interval: </h4>
                <span>{getInterval()}</span>
                <hr />
                <div className="flex-row">
                    You will pay{' '}
                    {Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(calcPayment())}{' '}
                    {calcInterval()}.
                </div>
                <div className="flex-row">
                    If this is correct select continue to proceed. Please note,
                    to cancel a subscription you must contact us. All payments
                    are final.
                </div>
                <div className="flex-row">
                    <input
                        onClick={submit}
                        type="button"
                        value="Continue to payment"
                        style={{ width: '25%', marginRight: '1%' }}
                    />
                    <input
                        onClick={cancel}
                        type="button"
                        value="Cancel"
                        style={{ width: '25%' }}
                    />
                </div>
                <div className="flex-row text-center">
                    {loading ? (
                        <Picture
                            src={'images/loader.gif'}
                            alt="loading"
                            style={{
                                width: '4rem',
                                position: 'block',
                            }}
                        />
                    ) : null}
                </div>
                <div className="flex-row">{error ?? error}</div>
            </section>
        </div>
    )
}
