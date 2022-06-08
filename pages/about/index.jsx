import styles from '../../styles/pages/About.module.css'
import { Fragment } from 'react'
import { attributes } from '!!frontmatter-markdown-loader!../../content/pages/about.md'
import Meta from '../meta'
import Image from 'next/image'

function About() {
    const text = attributes

    return (
        <>
            <Meta />
            <div className={styles.about}>
                <div
                    style={{
                        backgroundImage: `url(/${text.background})`,
                    }}
                    className="bg-img"
                ></div>
                <div className="title">
                    <h2>{text.title}</h2>
                </div>
                {text.info.map((section, i) => {
                    return (
                        <Fragment key={i}>
                            <h4>{section.title}</h4>
                            <span className={styles.item}>{section.text}</span>
                        </Fragment>
                    )
                })}
                <div className={styles.meetUsContainer}>
                    <h5 style={{ marginBottom: '3.5%' }}>{text.meetus.title}</h5>
                    {text.meetus.devs.map((dev, i) => {
                        return (
                            <Fragment key={i}>
                                <div className={styles.meetUs}>
                                    <div
                                        style={{
                                            minWidth: '25%',
                                        }}
                                    >
                                        <Image
                                            src={`/${dev.pic}`}
                                            alt={dev.imgAlt}
                                            height={150}
                                            width={150}
                                            layout="fixed"
                                            objectFit="cover"
                                            objectPosition="center"
                                            quality={50}
                                        />
                                    </div>
                                    <div className={styles.meetUsTitles}>
                                        <h6>{dev.name}</h6>
                                        {dev.titles.map((title, i) => {
                                            return i ===
                                                dev.titles.length - 1 ? (
                                                <p>{title.title}</p>
                                            ) : (
                                                <span>{title.title}</span>
                                            )
                                        })}
                                        <div className={styles.links}>
                                            {dev.links.map((link, i) => {
                                                return (
                                                    <Fragment key={i}>
                                                        <u>
                                                            <a
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                href={link.link}
                                                            >
                                                                {link.text}
                                                            </a>
                                                        </u>
                                                        {i ===
                                                        dev.links.length -
                                                            1 ? null : (
                                                            <span>-</span>
                                                        )}
                                                    </Fragment>
                                                )
                                            })}
                                        </div>
                                        <span>
                                            <em>
                                                <small>{dev.quote}</small>
                                            </em>
                                        </span>
                                    </div>
                                </div>
                            </Fragment>
                        )
                    })}
                </div>
                <h5>{text.extra.title}</h5>
                <div className={styles.moreInfo}>
                    <span>{text.extra.text}</span>
                </div>
            </div>
        </>
    )
}

export default About
