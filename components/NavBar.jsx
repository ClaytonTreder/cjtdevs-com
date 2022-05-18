import { Fragment } from 'react'
import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/components/NavBar.module.css'

export default function NavBar(params) {
    const navOpen = params.mobileNavOpen
    const setNavOpen = params.setMobileNavOpen

    return (
        <Fragment>
            <div className={styles['navbar']}>
                <Navs />
            </div>
            {navOpen ? (
                <div className={styles['mobilenavbar']}>
                    <div
                        className={styles['x']}
                        onClick={() => {
                            setNavOpen(false)
                        }}
                    >
                        &#x2715;
                    </div>
                    <Navs />
                </div>
            ) : null}
        </Fragment>
    )
}

function Navs() {
    const loc = useRouter()

    const home = useRef(null)
    const about = useRef(null)
    const services = useRef(null)
    const contact = useRef(null)
    const clients = useRef(null)
    const blog = useRef(null)

    useEffect(() => {
        console.log(loc)
        switch (loc.asPath) {
            case '/':
                home.current.classList.add(`${styles['nav-select']}`)
                break
            case '/about':
                about.current.classList.add(`${styles['nav-select']}`)
                break
            case '/services':
                services.current.classList.add(`${styles['nav-select']}`)
                break
            case '/contact':
                contact.current.classList.add(`${styles['nav-select']}`)
                break
            case '/clients':
                clients.current.classList.add(`${styles['nav-select']}`)
                break
            case '/blog':
                blog.current.classList.add(`${styles['nav-select']}`)
                break
            default:
                break
        }
    }, [loc.pathname])
    return (
        <Fragment>
            <a ref={home} href="/" className="flex-inline">
                <div>
                    <div className={styles['arrow-left-top']}></div>
                    <div className={styles['arrow-left-bottom']}></div>
                </div>
                <span className={styles['nav']}>Home</span>
            </a>
            <a ref={about} href="/about" className="flex-inline">
                <div>
                    <div className={styles['arrow-left-top']}></div>
                    <div className={styles['arrow-left-bottom']}></div>
                </div>
                <span className={styles['nav']}>About</span>
            </a>
            <a ref={services} href="/services" className="flex-inline">
                <div>
                    <div className={styles['arrow-left-top']}></div>
                    <div className={styles['arrow-left-bottom']}></div>
                </div>
                <span className={styles['nav']}>Services</span>
            </a>
            <a ref={contact} href="/contact" className="flex-inline">
                <div>
                    <div className={styles['arrow-left-top']}></div>
                    <div className={styles['arrow-left-bottom']}></div>
                </div>
                <span className={styles['nav']}>Contact</span>
            </a>
            <a ref={clients} href="/clients" className="flex-inline">
                <div>
                    <div className={styles['arrow-left-top']}></div>
                    <div className={styles['arrow-left-bottom']}></div>
                </div>
                <span className={styles['nav']}>Clients</span>
            </a>
            <a ref={blog} href="/blog" className="flex-inline">
                <div>
                    <div className={styles['arrow-left-top']}></div>
                    <div className={styles['arrow-left-bottom']}></div>
                </div>
                <span className={styles['nav']}>Blog</span>
            </a>
        </Fragment>
    )
}
