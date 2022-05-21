import styles from '../styles/components/Footer.module.css'
import { attributes } from '!!frontmatter-markdown-loader!../content/components/footer.md'
import Picture from './Picture'

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
                    {text.social.links.map((link, i) => (
                        <div key={i} className={styles.link}>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href={link.link}
                            >
                                <Picture src={link.pic} alt="social link" />
                                {link.text}
                            </a>
                            <hr />
                        </div>
                    ))}
                    <div className={styles.link}>
                        <a href={`mailto:${text.social.email.text}`}>
                            <Picture src={text.social.email.pic} alt="mail" />
                            {text.social.email.text}
                        </a>
                        <hr />
                    </div>
                    <div className={styles.link}>
                        <a href={`tel:${text.social.phone.text}`}>
                            <Picture src={text.social.phone.pic} alt="tel" />
                            {text.social.phone.text}
                        </a>
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
