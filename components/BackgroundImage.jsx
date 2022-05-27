import Image from 'next/image'

export default function BackgroundImage(props) {
    return props.src ? (
        <div className="bg-img">
            <Image
                quality={50}
                src={`/${props.src}`}
                width={0}
                height={0}
                layout="fill"
                alt={props.imgAlt}
            />
        </div>
    ) : null
}
