import styles from '../styles/components/Footer.module.css'
import { attributes } from '!!frontmatter-markdown-loader!../content/components/footer.md'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    const text = attributes
    return (
        <>
            <div className={styles.footer}>
                <section>
                    {text.quick.title ? <h6>{text.quick.title}</h6> : null}
                    {text.quick.links.map((link, i) => (
                        <div key={i} className={styles.link}>
                            <a href={link.link}>{link.text}</a>
                            <hr />
                        </div>
                    ))}
                </section>
                <section>
                    {text.middle.title ? <h6>{text.middle.title}</h6> : null}
                    {text.middle.links.map((link, i) => (
                        <div key={i} className={styles.link}>
                            <a href={link.link}>{link.text}</a>
                            <hr />
                        </div>
                    ))}
                </section>
                <section>
                    {text.social.title ? <h6>{text.social.title}</h6> : null}
                    {text.social.links.map((sLink, i) => (
                        <div key={i} className={styles.link}>
                            <Link href={sLink.link}>
                                <a rel="noreferrer" target="_blank">
                                    <Image
                                        width={20}
                                        height={20}
                                        src={`/${sLink.pic}`}
                                        alt="social link"
                                    />

                                    <span style={{ marginLeft: '2px' }}>
                                        {sLink.text}
                                    </span>
                                </a>
                            </Link>
                            <hr />
                        </div>
                    ))}
                    <div className={styles.link}>
                        <Link href={`mailto:${text.social.email.text}`}>
                            <a>
                                <Image
                                    width={20}
                                    height={20}
                                    src={`/${text.social.email.pic}`}
                                    alt="mail"
                                />

                                <span style={{ marginLeft: '2px' }}>
                                    {text.social.email.text}
                                </span>
                            </a>
                        </Link>
                        <hr />
                    </div>
                    <div className={styles.link}>
                        <Link href={`tel:${text.social.phone.text}`}>
                            <a>
                                <Image
                                    width={20}
                                    height={20}
                                    src={`/${text.social.phone.pic}`}
                                    alt="tel"
                                />
                                <span style={{ marginLeft: '2px' }}>
                                    {text.social.phone.text}
                                </span>
                            </a>
                        </Link>
                        <hr />
                    </div>
                </section>
            </div>
            <div className={styles.legal}>
                {new Date().getFullYear() === 2022
                    ? '2022'
                    : `2022-${new Date().getFullYear()}`}{' '}
                CJT Devs, LLC
            </div>
        </>
    )
}
