import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Picture from '../../../components/Picture'
import LinkShare from '../../../components/LinkShare'
import styles from '../../../styles/pages/Post.module.css'
import Head from 'next/head'

export default function BlogPost({ frontmatter, markdownBody }) {
    if (!frontmatter) return <></>

    const blog = JSON.parse(frontmatter)

    return (
        <>
            <Head>
                <meta
                    key="ogtitle"
                    property="og:title"
                    content={`CJT Devs Blog - ${blog.title}`}
                />
                <meta
                    key="ogdescription"
                    property="og:description"
                    content={blog.subTitle}
                />
                <meta
                    key="ogimage"
                    property="og:image"
                    content={blog.img}
                />
                <meta
                    key="description"
                    name="description"
                    content={blog.subTitle}
                />
            </Head>
            <div className={styles.post}>
                <div className="flex-row" style={{ marginBottom: '2.5%' }}>
                    <div className="column">
                        <h4>{blog.title}</h4>
                        <h5>{blog.subTitle}</h5>
                        <Picture
                            style={{
                                opacity: '80%',
                                width: '100%',
                                height: '20vh',
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                            src={blog.img}
                        />
                        <ReactMarkdown>
                            {JSON.parse(markdownBody)}
                        </ReactMarkdown>
                        <br />
                        <br />
                        <span>
                            Thanks for reading - <i>{blog.author}</i>
                        </span>
                        <LinkShare link={`/blog?post=${blog.slug}`} />
                        <div>
                            <button
                                onClick={() => {
                                    window.location.href = `/blog`
                                }}
                                style={{ marginTop: '5%', width: '25%' }}
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps({ ...ctx }) {
    const { postname } = ctx.params

    const content = await import(
        `!!raw-loader!../../../content/blogs/${postname}.md`
    )
    const data = matter(content.default)

    return {
        props: {
            frontmatter: JSON.stringify(data.data),
            markdownBody: JSON.stringify(data.content),
        },
    }
}

export async function getStaticPaths() {
    const blogSlugs = ((context) => {
        const keys = context.keys()
        const data = keys.map((key, index) => {
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

            return slug
        })
        return data
    })(require.context('../../../content/blogs', true, /\.md$/))

    const paths = blogSlugs.map((slug) => `/blog/post/${slug}`)

    return {
        paths,
        fallback: false,
    }
}
