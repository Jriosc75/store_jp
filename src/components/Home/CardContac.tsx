import { Box, Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import useBoxShadow from '../../hook/useBoxShadow'
import { useInView } from 'react-intersection-observer'
interface Props {
    mt: number
}

const CardContac = ({ mt }: Props) => {
    const { palette } = useTheme()
    const [hover, setHover] = useState(false)

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
        delay: 100,
    })

    return (
        <Box
            mt={mt}
            ref={ref}
            className={`card-zoom ${inView ? 'in-view' : ''}`}
            sx={{
                border: `1px solid ${palette.secondary.contrastText}`,
                px: { md: 5, xs: 3 },
                height: { md: 200, xs: 220 },
                width: '100%',
                boxShadow: useBoxShadow(true),
                cursor: 'pointer',
            }}
            maxWidth={800}
            display={'flex'}
            alignItems={'center'}
            borderRadius={1}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Box marginLeft={{ md: 3, xs: 0 }}>
                <Typography fontSize={{ md: 30, xs: 25 }} sx={{ fontWeight: 500 }}>
                    Trabajemos y avancemos juntos <br />{' '}
                    <span style={{ color: palette.secondary.main }}>en tu proyecto</span>
                </Typography>
                <Typography
                    variant="body1"
                    mt={1}
                    sx={{
                        borderRadius: 1,
                        color: palette.primary.contrastText,
                        px: 2,
                        py: 1,
                        width: 'fit-content',
                        background: hover ? '#1A2530' : 'transparent',
                        opacity: 0.7,
                        border: hover
                            ? `1px solid ${palette.secondary.main}`
                            : `1px solid ${palette.secondary.contrastText}`,
                        transition: 'color 0.3s ease, border-color 0.3s ease',
                    }}
                >
                    Contactar
                </Typography>
            </Box>
        </Box>
    )
}

export default CardContac
