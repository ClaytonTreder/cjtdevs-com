import Link from 'next/link'
import matter from 'gray-matter'

export default function BlogPost({ pages }) {
    pages = JSON.parse(pages) ?? []
    return (
        <>
            <div>
                <div
                    className="flex-row"
                    style={{ marginBottom: '20%', padding: '2% 20%' }}
                >
                    <div
                        className="column"
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <h4>Legal Info</h4>
                        {pages.map((page) => (
                            <Link href={`/legal/${page.slug}`}>
                                <u style={{ cursor: 'pointer' }}>
                                    {page.frontmatter.title}
                                </u>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    try {
        const pages = ((context) => {
            const keys = context.keys()
            const values = keys.map(context)

            const data = keys.map((key, index) => {
                const slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
                const document = matter(values[index].default)
                return {
                    frontmatter: document.data,
                    slug,
                }
            })
            return data
        })(require.context('!!raw-loader!../../content/legal', true, /\.md$/))

        return {
            props: { pages: JSON.stringify(pages) },
        }
    } catch (ex) {
        console.log(ex)
        return {
            props: { pages: JSON.stringify([]) },
        }
    }
}
