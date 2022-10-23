import { useEffect } from 'react'
import styles from 'styles/pages/Calendar.module.css'

export default function Calendar() {
    useEffect(() => {
        Calendly.initInlineWidget({
            url: 'https://calendly.com/cjtdevs',
            parentElement: document.getElementById('calendar'),
            prefill: {},
            utm: {},
        })
    }, [])

    return (
        <>
            {false && (
                <div className={styles.calendar}>
                    <div
                        style={{ height: '100%', padding: '5%' }}
                        id="calendar"
                    />
                </div>
            )}
        </>
    )
}
