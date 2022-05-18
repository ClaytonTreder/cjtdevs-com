import Picture from './Picture'
import { useState, Fragment } from 'react'
import { FacebookIcon, FacebookShareButton } from 'react-share'

export default function LinkShare(props) {
    const [link, setLink] = useState('https://cjtdevs.com'  + props.link)
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
                <Picture
                    style={{
                        marginLeft: '2%',
                        width: 'auto',
                        maxHeight: '2rem',
                        cursor: 'pointer',
                    }}
                    src={'images/share.png'}
                    alt={`share ${'https://' + props.link}`}
                    onClick={() => {
                        setOpen(!open)
                        setLink('https://' + props.link)
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
                                .writeText('https://' + props.link)
                                .then(() => {
                                    setLink('Copied!')
                                })
                        }}
                        style={{ width: 'auto', maxHeight: '3rem' }}
                        src={'images/clipboard.png'}
                        alt={`click to share ${'https://' + props.link}`}
                    />
                </div>
            ) : null}
        </Fragment>
    )
}
