import { useEffect } from 'react'

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
        <div style={{ minHeight: '100vh' }}>
            <div style={{ height: '100%' }} id="calendar" />
        </div>
    )
}
