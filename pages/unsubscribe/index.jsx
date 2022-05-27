import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Unsubscribe() {
    const loc = useRouter()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        const email = loc.query.email
        console.log(email)
        axios.delete('/api/newsletter/' + email).finally(() => {
            setLoading(false)
        })
    }, [loc.search, loc.query.email])
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '5%',
            }}
        >
            {!loading ? (
                <h4>You have successfully unsubscribed.</h4>
            ) : (
                <h6>loading...</h6>
            )}
        </div>
    )
}
