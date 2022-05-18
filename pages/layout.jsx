import { useState } from 'react'

import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import InitLoader from '../components/InitLoader'

import useSessionStorage from '../hooks/useSessionStorage'

export default function Layout({ children }) {
    const [mobileNavOpen, setMobileNavOpen] = useState()

    const [initLoading, setInitLoading] = useSessionStorage('initLoading', true)

    return (
        <div>
            {initLoading ? (
                <>
                    <div className="body-content">
                        <NavBar
                            setMobileNavOpen={setMobileNavOpen}
                            mobileNavOpen={mobileNavOpen}
                        />
                        <Header
                            setMobileNavOpen={setMobileNavOpen}
                            mobileNavOpen={mobileNavOpen}
                        />
                        {children}
                    </div>
                    <Footer />
                </>
            ) : (
                <InitLoader setInitLoading={setInitLoading} />
            )}
        </div>
    )
}
