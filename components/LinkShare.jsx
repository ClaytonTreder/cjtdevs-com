import { useState, Fragment } from 'react'
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    EmailIcon,
    EmailShareButton,
} from 'react-share'

export default function LinkShare(props) {
    const baseUrl = 'https://cjtdevs.com'
    const [link] = useState(baseUrl + props.link)

    return (
        <Fragment>
            <div
                style={{
                    marginTop: '5%',
                }}
                className="flex-row"
            >
                <h4>Share</h4>
            </div>
            <div
                style={{
                    marginTop: '2%',
                }}
                className="flex-inline"
            >
                <FacebookShareButton url={link}>
                    <FacebookIcon size={'2.5rem'} />
                </FacebookShareButton>
                <LinkedinShareButton url={link}>
                    <LinkedinIcon size={'2.5rem'} />
                </LinkedinShareButton>
                <EmailShareButton url={link}>
                    <EmailIcon size={'2.5rem'} />
                </EmailShareButton>
            </div>
        </Fragment>
    )
}
