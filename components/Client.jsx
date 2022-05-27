import Image from 'next/image'
import styles from '../styles/components/Client.module.css'
import Picture from './Picture'
export default function Client(params) {
    return (
        <div className={styles.client}>
            {params.link ? (
                <a href={params.link} target="_blank" rel="noreferrer">
                    <span>{params.title}</span>
                    <Image
                        height={200}
                        width={150}
                        layout="responsive"
                        src={`/${params.src}`}
                        alt={params.alt}
                    />
                </a>
            ) : (
                <div>
                    <span>{params.title}</span>
                    <Image
                        height={250}
                        width={150}
                        src={`/${params.src}`}
                        alt={params.alt}
                    />
                </div>
            )}

            <span className={styles.testimonial}>
                <em>{params.quote}</em>
                <span> {params.author ? ` - ${params.author}` : null}</span>
            </span>
        </div>
    )
}
