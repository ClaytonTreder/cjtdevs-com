import ContactForm from '../../components/Contact'
import styles from '../../styles/pages/Contact.module.css'
import { attributes } from '!!frontmatter-markdown-loader!../../content/pages/contact.md'
import Meta from '../meta'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
    const text = attributes
    return (
        <>
            <Meta />
            <div className={styles.contact}>
                <div
                    style={{
                        backgroundImage: `url(/${text.background})`,
                    }}
                    className="bg-img"
                ></div>
                <div className="title">
                    <h2>{text.title}</h2>
                </div>
                <div className={styles.subtitleSection}>
                    <div className={styles.subtitle}>
                        <span style={{ fontSize: 'large' }}>
                            {text.subTitle}
                        </span>
                    </div>
                    <div className={styles.subtitle}>
                        <span style={{ fontSize: 'medium' }}>
                            {text.content}
                        </span>
                    </div>
                </div>
                <hr />
                <div className={styles.consultationButton}>
                    <Image
                        height={60}
                        width={60}
                        src={'/images/coffee.png'}
                        alt={'coffee'}
                    />
                    <Link href={'/calendar'}>
                        <button>
                            Schedule a free consulation, click here!
                        </button>
                    </Link>
                </div>
                <section>
                    <div className={styles.formSection}>
                        <ContactForm />
                    </div>
                </section>
            </div>
        </>
    )
}
