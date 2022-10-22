import { useEffect, useState} from 'react'

export default function BackgroundImage({ src, onload }) {
    const [state, setState] = useState({ loaded: false })
    useEffect(() => {
        const img = new Image()
        img.src = src
        img.onload = () => {
            setState((prevState) => ({
                ...prevState,
                loaded: true,
            }))
            onload()
        }
    }, [src, onload])
    return state.loaded ? (
        <div
            style={{ backgroundImage: `url(/${src})` }}
            className="bg-img"
        ></div>
    ) : null
}
