import styles from '../styles/pages/Home.module.css'
import { attributes } from '!!frontmatter-markdown-loader!../content/pages/home.md'
import NewsLetter from '../components/NewsLetter'
import Meta from './meta'
import Image from 'next/image'
import Link from 'next/link'

function Home() {
    const text = attributes

    return (
        <>
            <Meta />
            <div
                style={{
                    background: `url(/${text.home_bg}) no-repeat center center fixed`,
                    backgroundSize: 'cover',
                    WebkitBackgroundSize: 'cover',
                    MozBackgroundSize: 'cover',
                    OBackgroundSize: 'cover',
                }}
            >
                <div className={`${styles.banner} fade-in`}>
                    <div className={`${styles.title}`}>
                        {text.home_call_to_action.hcta_lines.map((line, i) => {
                            return <h3 key={i}>{line.hcta_line}</h3>
                        })}
                    </div>
                    <div className={styles.ribbon}>
                        {text.home_call_to_action.hcta_buttons.map(
                            (button, i) => {
                                return (
                                    <a
                                        key={i}
                                        href={
                                            button.hcta_button.hcta_button_link
                                        }
                                    >
                                        <button>
                                            {
                                                button.hcta_button
                                                    .hcta_button_text
                                            }
                                        </button>
                                    </a>
                                )
                            }
                        )}
                    </div>
                </div>
                <NewsLetter />
                <div className={styles.information}>
                    {text.home_actions.map((action, i) => {
                        return (
                            <section key={i}>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        height: '5rem',
                                    }}
                                >
                                    <Image
                                        className={styles.img}
                                        height={100}
                                        width={100}
                                        objectFit="contain"
                                        alt="background"
                                        src={`/${action.ha_action.ha_action_image}`}
                                    />
                                </div>
                                <hr />
                                <p>{action.ha_action.ha_action_text}</p>
                            </section>
                        )
                    })}
                </div>
                <div className={styles.baseLinks}>
                    {text.home_links.map((homeLink, i) => {
                        return (
                            <div key={i} className="flex-inline">
                                <Image
                                    height={80}
                                    width={80}
                                    src={`/${homeLink.hl_link.hl_link_image}`}
                                    alt={`${homeLink.hl_link.hl_link_image}`}
                                />
                                <Link href={homeLink.hl_link.hl_link_nav}>
                                    <button>
                                        {homeLink.hl_link.hl_link_text}
                                    </button>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home
