import { Fragment } from 'react'
import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/components/NavBar.module.css'
import Link from 'next/link'

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
            <Link href="/">
                <a ref={home} className="flex-inline">
                    <div>
                        <div className={styles['arrow-left-top']}></div>
                        <div className={styles['arrow-left-bottom']}></div>
                    </div>
                    <span className={styles['nav']}>Home</span>
                </a>
            </Link>
            <Link href="/about">
                <a ref={about} className="flex-inline">
                    <div>
                        <div className={styles['arrow-left-top']}></div>
                        <div className={styles['arrow-left-bottom']}></div>
                    </div>
                    <span className={styles['nav']}>About</span>
                </a>
            </Link>
            <Link href="/services">
                <a ref={services} className="flex-inline">
                    <div>
                        <div className={styles['arrow-left-top']}></div>
                        <div className={styles['arrow-left-bottom']}></div>
                    </div>
                    <span className={styles['nav']}>Services</span>
                </a>
            </Link>
            <Link href="/contact">
                <a ref={contact} className="flex-inline">
                    <div>
                        <div className={styles['arrow-left-top']}></div>
                        <div className={styles['arrow-left-bottom']}></div>
                    </div>
                    <span className={styles['nav']}>Contact</span>
                </a>
            </Link>
            <Link href="/clients">
                <a ref={clients} className="flex-inline">
                    <div>
                        <div className={styles['arrow-left-top']}></div>
                        <div className={styles['arrow-left-bottom']}></div>
                    </div>
                    <span className={styles['nav']}>Clients</span>
                </a>
            </Link>
            <Link href="/blog">
                <a ref={blog} className="flex-inline">
                    <div>
                        <div className={styles['arrow-left-top']}></div>
                        <div className={styles['arrow-left-bottom']}></div>
                    </div>
                    <span className={styles['nav']}>Blog</span>
                </a>
            </Link>
        </Fragment>
    )
}
