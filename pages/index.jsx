import styles from '../styles/pages/Home.module.css'
import { attributes } from '!!frontmatter-markdown-loader!../content/pages/home.md'
import NewsLetter from '../components/NewsLetter'
import Picture from '../components/Picture'
import Meta from './meta'

function Home() {
    const text = attributes

    return (
        <>
            <Meta />
            <div>
                <Picture
                    src={text.home_bg}
                    alt="micro-chip"
                    className="bg-img"
                />
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
                                <img
                                    alt="background"
                                    src={`./${action.ha_action.ha_action_image}`}
                                />
                                <hr />
                                <p>{action.ha_action.ha_action_text}</p>
                            </section>
                        )
                    })}
                </div>
                <div className={styles.baseLinks}>
                    {text.home_links.map((link, i) => {
                        return (
                            <div key={i} className="flex-inline">
                                <img
                                    src={`./${link.hl_link.hl_link_image}`}
                                    alt={`${link.hl_link.hl_link_image}`}
                                />
                                <a href={link.hl_link.hl_link_nav}>
                                    <button>{link.hl_link.hl_link_text}</button>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home
