import { useEffect } from 'react'

export default function Instagram() {
    useEffect(()=>{

        window.location = "https://api.instagram.com/oauth/authorize"
            + `?client_id=${process.env.NEXT_PUBLIC_INSTA_SITE_ID}`
            + `&redirect_uri=${process.env.NEXT_PUBLIC_INSTA_REDIRECT}`
            + "&scope=user_profile,user_media"
            + "&response_type=code"


    },[])
    return <></>
}