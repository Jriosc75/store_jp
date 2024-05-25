interface Props {
    src: string
    alt: string
    className: string
}

const ZoomImage = ({ src, alt, className }: Props) => {
    return (
        <div className={className}>
            <img className="zoomable-image" src={src} alt={alt} />
        </div>
    )
}

export default ZoomImage
