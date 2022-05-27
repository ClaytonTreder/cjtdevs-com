import { Fragment } from 'react'
import styles from '../../styles/components/NewsLetter.module.css'
import NewsLetterForm from '../../components/NewsLetter'
import Meta from '../meta'
export default function NewLetter() {
    return (
        <Fragment>
            <Meta />
            <div className="newsletter-page">
                <div className="title">
                    <h2>News Letter</h2>
                </div>
            </div>
            <NewsLetterForm />
        </Fragment>
    )
}
