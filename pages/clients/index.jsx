import Client from '../../components/Client'
import * as styles from '../../styles/pages/Clients.module.css'
import { attributes } from '!!frontmatter-markdown-loader!../../content/pages/clients.md'
import Meta from '../meta'

export default function Clients() {
    const text = attributes
    return (
        <>
            <Meta />
            <div
                className={styles.clients}
                style={{
                    background: `url(/${text.background}) no-repeat center center fixed`,
                    backgroundSize: 'cover',
                }}
            >
                <div className="title">
                    <h2>{text.title}</h2>
                </div>
                <div className={styles.subtitle}>
                    <span style={{ fontSize: 'large' }}>{text.subtitle}</span>
                </div>
                <div className={styles.subtitle}>
                    <span style={{ fontSize: 'medium' }}>{text.content}</span>
                </div>
                <hr />
                <section>
                    {text.clients?.map((client, i) => {
                        return (
                            <div className={styles.item} key={i}>
                                <Client
                                    src={client.pic}
                                    title={client.title}
                                    link={client.link}
                                    quote={client.testimonial}
                                    author={client.author}
                                />
                            </div>
                        )
                    })}
                </section>
            </div>
        </>
    )
}
