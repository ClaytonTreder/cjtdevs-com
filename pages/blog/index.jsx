import { Fragment } from 'react'
import { attributes } from '!!frontmatter-markdown-loader!../../content/pages/blog.md'
import styles from '../../styles/pages/Blog.module.css'
import BlogContainer from '../../components/BlogContainer'
import matter from 'gray-matter'
import Meta from '../meta'

export default function Blog({ posts }) {
    const blogs = JSON.parse(posts) ?? []
    return (
        <>
            <Meta />
            <div className={styles.blog}>
                <div className="title">
                    <h2>{attributes.title}</h2>
                </div>
                <section>
                    {blogs
                        .sort((a, b) =>
                            a.frontmatter.date < b.frontmatter.date ? 1 : -1
                        )
                        .map((blog, i) => {
                            return (
                                <Fragment key={i}>
                                    <BlogContainer blog={blog} />
                                    <br /> <hr /> <br />
                                </Fragment>
                            )
                        })}
                </section>
            </div>
        </>
    )
}

export async function getServerSideProps({ ...ctx }) {
    try {
        const posts = ((context) => {
            const keys = context.keys()
            const values = keys.map(context)

            const data = keys.map((key, index) => {
                let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
                const value = values[index]
                const document = matter(value.default)
                return {
                    frontmatter: document.data,
                    markdownBody: document.content,
                    slug,
                }
            })
            return data
        })(require.context('!!raw-loader!../../content/blogs', true, /\.md$/))

        return {
            props: { posts: JSON.stringify(posts) },
        }
    } catch (ex) {
        console.log(ex)
        return {
            props: {},
        }
    }
}
