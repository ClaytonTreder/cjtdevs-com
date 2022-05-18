import Picture from './Picture'
import { Fragment, useEffect, useState } from 'react'
import LinkShare from './LinkShare'

export default function BlogContainer(props) {
    const blog = props.blog.frontmatter
    const trimedFileName = props.blog.slug
    const [location, setLocation] = useState()

    useEffect(() => {
        setLocation(window.location)
    }, [])

    return (
        <Fragment>
            <div className="flex-row" style={{ marginBottom: '2.5%' }}>
                <div
                    className="column"
                    style={{
                        width: '35%',
                        paddingTop: '2.5%',
                        paddingRight: '2%',
                    }}
                >
                    <h3>{blog.title}</h3>
                    <h5>{blog.subTitle}</h5>
                    <p>
                        <small>Author: {blog.author}</small>
                    </p>
                    <LinkShare
                        link={`/blog/post/${trimedFileName}`}
                    />
                    <button
                        onClick={() => {
                            window.location.href = `/blog/post/${trimedFileName}`
                        }}
                        style={{ marginTop: '5%', width: '75%' }}
                    >
                        Read
                    </button>
                </div>
                <div className="column" style={{ width: '65%' }}>
                    <Picture
                        src={blog.img}
                        style={{
                            width: '100%',
                            height: '35vh',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                </div>
            </div>
        </Fragment>
    )
}
