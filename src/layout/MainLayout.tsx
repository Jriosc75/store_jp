import '../App.css'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import bgImage from '../assets/store-bg.png'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { ReactNode, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ZoomImage from '../components/common/ZoomImage'
import ShadowImg from '../assets/shadowImg.png'

interface Props {
    children: ReactNode
    arrow: boolean
}

function MainLayout({ children, arrow }: Props) {
    const { palette } = useTheme()
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const params = useLocation()
    const navigation = useNavigate()
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = 0
        }
    }, [params.pathname])

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: { md: 1, sx: 2 },
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover', // Esta propiedad ajusta la imagen para cubrir todo el fondo.
            }}
        >
            <Box
                height={{ md: '95%', xs: '98%' }}
                position={'relative'}
                sx={{ border: `1px solid ${palette.secondary.contrastText}` }}
                width={{ md: '95%', xs: '98%' }}
                borderRadius={1}
            >
                <Box
                    width={'100%'}
                    height={40}
                    position={'relative'}
                    sx={{
                        textAlign: 'center',
                        borderBottom: `1px solid ${palette.secondary.contrastText}`,
                    }}
                >
                    {arrow && (
                        <IconButton
                            sx={{
                                left: { md: 24, xs: 4 },
                                position: 'absolute',
                                color: palette.primary.contrastText,
                                fontWeight: 300,
                            }}
                            onClick={() => navigation('/')}
                        >
                            <ArrowBackIcon sx={{ fontSize: 23 }} />
                        </IconButton>
                    )}
                    <Typography variant="body1" sx={{ pt: 1.2 }}>
                        <span style={{ opacity: 0.6 }}>Tu tienda</span>{' '}
                        <span style={{ color: palette.secondary.main, fontWeight: 300 }}>
                            online
                        </span>
                    </Typography>
                </Box>
                <Box
                    position={'absolute'}
                    left={0}
                    zIndex={10}
                    top={0}
                    height={'100%'}
                    width={40}
                    /*                     sx={{ borderRight: `1px solid ${palette.secondary.contrastText}` }}
                     */
                ></Box>

                <Box
                    ref={scrollContainerRef}
                    sx={{
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        height: { md: 'calc(100% - 80px)', xs: 'calc(100% - 80px)' },
                        width: '100%',
                        padding: 2,
                        position: 'inherit',
                    }}
                    display={'flex'}
                    flexDirection={'column'}
                >
                    <Box
                        position={'fixed'}
                        zIndex={0}
                        height={'auto'}
                        left={{ md: -120, xs: -300 }}
                        bottom={{ md: -40, xs: -280 }}
                    >
                        <ZoomImage className={'image-container'} src={ShadowImg} alt="fondo" />
                    </Box>
                    <Box position={'fixed'} height={'auto'} zIndex={0} right={-170} top={-120}>
                        <ZoomImage className={'image-container-1'} src={ShadowImg} alt="fondo" />
                    </Box>
                    {children}
                </Box>

                <Box
                    width={'100%'}
                    height={40}
                    sx={{
                        textAlign: 'center',
                        borderTop: `1px solid ${palette.secondary.contrastText}`,
                    }}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Box display={'flex'} alignItems={'center'}>
                        <Typography variant="body1" sx={{ opacity: 0.6 }}>
                            by Jorick
                        </Typography>
                        <LocationOnIcon
                            sx={{
                                fontSize: 18,
                                marginLeft: 2,
                                color: palette.secondary.contrastText,
                            }}
                        />
                        <Typography variant="body1" sx={{ opacity: 0.6 }}>
                            Lima, Peru
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default MainLayout
