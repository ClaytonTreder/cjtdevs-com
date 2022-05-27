import Image from 'next/image'

export default function BackgroundImage(props) {
    return props.src ? (
        <div className="bg-img">
            <Image
                src={`/${props.src}`}
                layout="fill"
                alt={props.imgAlt}
            />
        </div>
    ) : null
}
