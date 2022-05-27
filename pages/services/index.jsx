import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/pages/Services.module.css'
import { attributes } from '!!frontmatter-markdown-loader!../../content/pages/services.md'
import Contact from '../../components/Contact'
import Picture from '../../components/Picture'
import scrollTo from '../../hooks/scrollTo.js'
import { useMemo } from 'react'
import Meta from '../meta'
import Link from 'next/link'

export default function Services() {
    const text = attributes

    const talk = useRef(null)

    const loc = useRouter()

    const scrollOptions = useMemo(
        () => ({
            behavior: 'auto',
            block: 'center',
            inline: 'nearest',
        }),
        []
    )

    useEffect(() => {
        switch (loc.hash) {
            case '#site':
                scrollTo(text?.sections[0]?.tag, scrollOptions)
                break
            case '#app':
                scrollTo(text?.sections[1]?.tag, scrollOptions)
                break
            case '#software':
                scrollTo(text?.sections[2]?.tag, scrollOptions)
                break
            default:
                break
        }
    }, [loc.hash, scrollOptions, text?.sections])

    return (
        <>
            <Meta />
            {text ? (
                <div
                    className={styles.services}
                    style={{
                        background: `url(/${text.background}) no-repeat center center fixed`,
                        backgroundSize: 'cover',
                        WebkitBackgroundSize: 'cover',
                        MozBackgroundSize: 'cover',
                        OBackgroundSize: 'cover',
                    }}
                >
                    <div className="title">
                        <h2>{text.title}</h2>
                    </div>
                    {text.sections?.map((section, i) => {
                        return (
                            <div
                                id={section.tag}
                                style={{
                                    backgroundColor:
                                        'rgba(255, 255, 255, 0.932)',
                                    margin: '10%',
                                    padding: '2 .5%',
                                    borderRadius: '1rem',
                                    paddingTop: '2.5%',
                                }}
                                key={i}
                            >
                                <h4>{section.title}</h4>
                                <section>
                                    <p>
                                        <Picture
                                            src={section.pic}
                                            alt="service"
                                            style={{ float: section.float }}
                                        />
                                        {section.text}
                                    </p>
                                </section>
                                <div className={styles.btnContainer}>
                                    <button
                                        onClick={() => {
                                            talk.current.scrollIntoView(
                                                scrollOptions
                                            )
                                        }}
                                    >
                                        {section.button}
                                    </button>
                                </div>
                                <div className={styles.btnContainer}>
                                    <Link href={'/prices#' + section.tag}>
                                        <a style={{ marginTop: '1%' }}>
                                            <u>Prices</u>
                                        </a>
                                    </Link>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                    <div className={styles.contactContainer} ref={talk}>
                        <h4>{text.contactTitle}</h4>
                        <Contact />
                    </div>
                </div>
            ) : null}
        </>
    )
}
