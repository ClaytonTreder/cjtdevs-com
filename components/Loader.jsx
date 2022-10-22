import Image from 'next/image'

export default function Loader() {
    return (
        <div style={{ margin: 'auto auto', width: '50%' }}>
            <Image
                layout="responsive"
                height={'1'}
                width={'1'}
                src="/images/loader.gif"
                alt="loader"
            />
        </div>
    )
}
