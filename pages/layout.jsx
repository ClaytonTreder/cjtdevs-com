import { useState } from 'react'

import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Layout({ children }) {
    const [mobileNavOpen, setMobileNavOpen] = useState()

    return (
        <div>
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
        </div>
    )
}
