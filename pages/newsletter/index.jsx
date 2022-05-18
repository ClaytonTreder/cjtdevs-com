import { Fragment } from 'react'
import styles from '../../styles/components/NewsLetter.module.css'
import NewsLetterForm from '../../components/NewsLetter'
export default function NewLetter() {
    return (
        <Fragment>
            <div className="newsletter-page">
                <div className="title">
                    <h2>News Letter</h2>
                </div>
            </div>
            <NewsLetterForm />
        </Fragment>
    )
}
