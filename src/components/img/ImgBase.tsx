import { useTheme } from '@mui/material'
import { useInView } from 'react-intersection-observer'
interface Props {
    src: any
}
function ImgBase({ src }: Props) {
    const theme = useTheme()
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    })

    return (
        <img
            ref={ref}
            src={src}
            height={500}
            className="img-type-page"
            width={'100%'}
            style={{
                maxWidth: 800,
                borderRadius: 4,
                opacity: inView ? 1 : 0.1,
                transform: `scale(${inView ? 1.05 : 1})`,
                transition: theme.transitions.create(['opacity', 'transform'], {
                    easing: theme.transitions.easing.easeInOut,
                    duration: 500,
                }),
            }}
        />
    )
}

export default ImgBase
