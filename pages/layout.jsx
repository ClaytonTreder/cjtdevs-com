import { useState } from 'react'

import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useEffect } from 'react'

export default function Layout({ children }) {
    const [mobileNavOpen, setMobileNavOpen] = useState()

    useEffect(() => {
        if (typeof window !== undefined) {
            var chatbox = document.getElementById('fb-customer-chat')
            chatbox.setAttribute('page_id', '287773108038402')
            chatbox.setAttribute('attribution', 'biz_inbox')
            window.fbAsyncInit = function () {
                FB.init({
                    xfbml: true,
                    version: 'v15.0',
                })
            }
            ;(function (d, s, id) {
                var js,
                    fjs = d.getElementsByTagName(s)[0]
                if (d.getElementById(id)) return
                js = d.createElement(s)
                js.id = id
                js.src =
                    'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
                fjs.parentNode.insertBefore(js, fjs)
            })(document, 'script', 'facebook-jssdk')
        }
    }, [])

    return (
        <>
            <NavBar
                setMobileNavOpen={setMobileNavOpen}
                mobileNavOpen={mobileNavOpen}
            />
            <Header
                setMobileNavOpen={setMobileNavOpen}
                mobileNavOpen={mobileNavOpen}
            />
            {children}
            <div id="fb-root"></div>
            <div id="fb-customer-chat" className="fb-customerchat"></div>
            <Footer />
        </>
    )
}
