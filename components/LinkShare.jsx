import Picture from './Picture'
import { useState, Fragment } from 'react'
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton
} from 'react-share'

export default function LinkShare(props) {
    const baseUrl = 'https://zesty-selkie-1384ae.netlify.app'
    const [link, setLink] = useState(baseUrl + props.link)
    const [open, setOpen] = useState(false)

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
                    <FacebookIcon />
                </FacebookShareButton>
                <LinkedinShareButton url={link}>
                    <LinkedinIcon />
                </LinkedinShareButton>
                <Picture
                    style={{
                        width: 'auto',
                        maxHeight: '3.75rem',
                        cursor: 'pointer',
                    }}
                    src={'images/share.png'}
                    alt={`share ${baseUrl + props.link}`}
                    onClick={() => {
                        setOpen(!open)
                        setLink(baseUrl + props.link)
                    }}
                />
            </div>
            {open ? (
                <div
                    className="flex-row"
                    style={{
                        borderWidth: '2px',
                        borderType: 'solid',
                        borderColor: 'grey',
                        padding: '1%',
                    }}
                >
                    <input
                        style={{ width: '60%', maxHeight: '3rem', margin: 0 }}
                        type="text"
                        onChange={() => {
                            setLink(link)
                        }}
                        value={link}
                    />
                    <Picture
                        onClick={() => {
                            navigator.clipboard
                                .writeText(baseUrl + props.link)
                                .then(() => {
                                    setLink('Copied!')
                                })
                        }}
                        style={{ width: 'auto', maxHeight: '3rem' }}
                        src={'images/clipboard.png'}
                        alt={`click to share ${baseUrl + props.link}`}
                    />
                </div>
            ) : null}
        </Fragment>
    )
}
