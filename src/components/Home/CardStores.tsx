import { Box, Typography, useTheme } from '@mui/material'
import ImgData from '../../assets/example.jpeg'
import useBoxShadow from '../../hook/useBoxShadow'
import { useState } from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import { CSSTransition } from 'react-transition-group'
import NorthEastIcon from '@mui/icons-material/NorthEast'
interface Props {
    mt: number
    id: number
    title: string
}
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'
import IconsList from '../common/IconsList'

const CardStores = ({ mt, id, title }: Props) => {
    const { palette } = useTheme()
    const navigation = useNavigate()
    const [hover, setHover] = useState(false)
    const [titles] = useTypewriter({
        words: [title],
        loop: 1,
        delaySpeed: 1000,
    })
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
        delay: 600,
    })

    return (
        <Box
            mt={mt}
            ref={ref}
            className={`card-zoom ${inView ? 'in-view' : ''}`}
            sx={{
                border: `1px solid ${palette.secondary.contrastText}`,
                px: { md: 6, xs: 3 },
                height: 200,
                width: '100%',
                boxShadow: useBoxShadow(true),
                cursor: 'pointer',
            }}
            maxWidth={800}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            borderRadius={1}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => navigation(`/types/${id}`)}
        >
            <Box display={'flex'} alignItems={'center'}>
                {/*                 <Typography
                    variant="body1"
                    border={'1px solid red'}
                    color={palette.primary.contrastText}
                    width={1}
                    sx={{
                        fontSize: hover ? 0 : 22,
                        transition: 'font-size 1s ease',
                        marginRight: 3,
                        width: hover ? 0 : 22,
                    }}
                >
                    1
                </Typography> */}
                <Box>
                    <Typography variant="h2" mb={1} height={40}>
                        {titles}
                    </Typography>
                    <IconsList title={true} hover={hover} setHover={setHover} />
                </Box>
            </Box>
            <Box display={'flex'} alignItems={'center'} gap={2}>
                <CSSTransition in={hover} timeout={500} classNames="fade" unmountOnExit>
                    <img
                        src={ImgData}
                        height={210}
                        width={230}
                        className="imageStore"
                        style={{ boxShadow: useBoxShadow(true) }}
                    />
                </CSSTransition>
                <Box display={'flex'} flexDirection={'column'} alignItems={'end'}>
                    <NorthEastIcon
                        sx={{
                            opacity: 0.65,
                            color: palette.primary.contrastText,
                            fontSize: hover ? 15 : 18,
                            transition: 'font-size 1s ease',
                        }}
                    />
                    <Typography
                        variant="body1"
                        fontSize={11}
                        sx={{
                            fontSize: hover ? 11 : 0,
                            transition: 'font-size 1s ease',
                            color: palette.primary.contrastText,
                        }}
                    >
                        ver mas
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default CardStores
