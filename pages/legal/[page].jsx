import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

export default function BlogPost({ frontmatter, markdownBody }) {
    if (!frontmatter) return <></>

    const page = JSON.parse(frontmatter)

    return (
        <>
            <div>
                <div
                    className="flex-row"
                    style={{ marginBottom: '20%', padding: '2% 20%' }}
                >
                    <div className="column" style={{ width: '100%' }}>
                        <Link href="/legal">
                            <u>Back</u>
                        </Link>
                        <h4>{page.title}</h4>
                        <p>
                            Last update -{' '}
                            {new Date(page.date).toLocaleDateString()}
                        </p>
                        <ReactMarkdown>
                            {JSON.parse(markdownBody)}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps({ ...ctx }) {
    const { page } = ctx.params

    const content = await import(`!!raw-loader!../../content/legal/${page}.md`)
    const data = matter(content.default)

    return {
        props: {
            frontmatter: JSON.stringify(data.data),
            markdownBody: JSON.stringify(data.content),
        },
    }
}
