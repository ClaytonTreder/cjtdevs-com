import Picture from './Picture'
import { Fragment } from 'react'
import LinkShare from './LinkShare'
import styles from '../styles/components/BlogContainer.module.css'

export default function BlogContainer(props) {
    const blog = props.blog.frontmatter
    const trimedFileName = props.blog.slug

    return (
        <Fragment>
            <div className={styles.BlogContainer}>
                <div
                    style={{
                        marginBottom: '2.5%',
                        paddingRight: '1%',
                        width: '50%',
                    }}
                >
                    <div>
                        <h3>{blog.title}</h3>
                        <h5>{blog.subTitle}</h5>
                        <p>
                            <small>Author: {blog.author}</small>
                        </p>
                    </div>
                </div>
                <Picture
                    src={blog.img}
                    style={{
                        width: '50%',
                        height: '35vh',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />
            </div>
            <div className={styles.BlogContainer}>
                <div
                    className="column"
                    style={{
                        width: '35%',
                        paddingTop: '2.5%',
                        paddingRight: '2%',
                    }}
                >
                    <button
                        onClick={() => {
                            window.location.href = `/blog/post/${trimedFileName}`
                        }}
                        style={{
                            marginTop: '5%',
                            width: '75%',
                            color: 'black',
                        }}
                    >
                        Read
                    </button>
                    <LinkShare link={`/blog/post/${trimedFileName}`} />
                </div>
            </div>
        </Fragment>
    )
}
