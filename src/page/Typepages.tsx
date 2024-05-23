import { Box, Grid, Typography, useTheme } from '@mui/material'
import Logo from '../assets/example.jpeg'
import FooterBox from '../components/footer/FooterBox'
import ImgBase from '../components/img/ImgBase'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import IconsList from '../components/common/IconsList'
import { useParams } from 'react-router-dom'
import data from '../data.json'

function Typepages() {
    const theme = useTheme()
    const [hover, setHover] = useState(false)
    const [currentData, setCurrentData] = useState<any | null>(null)
    const { id } = useParams()
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    })

    useEffect(() => {
        const getData = () => {
            if (id) {
                const current = data.type_stores.find((item) => item.id === parseInt(id))
                setCurrentData(current || null) // Set to null if not found
            }
        }

        getData()
    }, [id])

    return (
        <>
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
                mt={{ md: 18, xs: 32 }}
                mb={4}
            >
                <Typography
                    variant="body1"
                    mb={3}
                    fontSize={11}
                    textAlign={'center'}
                    sx={{ letterSpacing: 6, textTransform: 'uppercase', opacity: 0.8 }}
                >
                    {currentData ? currentData.subtitle : 'Loading...'}
                </Typography>
                <Typography textAlign={'center'} variant="h1" mb={{ md: 18, xs: 27 }}>
                    {currentData ? currentData.title : 'Loading...'}
                </Typography>
                <ImgBase src={Logo} />
            </Box>
            <Box
                ref={ref}
                style={{
                    opacity: inView ? 1 : 0.1,
                    transform: `scale(${inView ? 1.05 : 1})`,
                    transition: theme.transitions.create(['opacity', 'transform'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: 500,
                    }),
                }}
                mt={{ md: 24, xs: 12 }}
                mb={{ md: 24, xs: 12 }}
                maxWidth={1000}
                mx={'auto'}
                px={{ md: 0, xs: 2 }}
            >
                <Grid
                    container
                    columns={12}
                    spacing={{ md: 6, xs: 4 }}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'start'}
                >
                    <Grid md={8} xs={12} item>
                        <Box>
                            <Typography variant="body1" sx={{ opacity: 0.5 }}>
                                {currentData ? currentData.title : 'Loading...'}
                            </Typography>
                            <Typography mt={1} variant="body2">
                                {currentData ? currentData.description : 'Loading...'}
                            </Typography>
                        </Box>

                        <Box mt={5}>
                            <Typography variant="body1" sx={{ opacity: 0.5 }}>
                                Detalles
                            </Typography>
                            {currentData
                                ? currentData.detalles.map((item: any, index: any) => (
                                      <Box
                                          display={'flex'}
                                          mt={1}
                                          justifyContent={'start'}
                                          alignItems={'start'}
                                      >
                                          <Typography width={10} ml={0.5} variant="body2" mr={1.5}>
                                              {index + 1}
                                          </Typography>
                                          <Typography variant="body2">{item.text}</Typography>
                                      </Box>
                                  ))
                                : 'Loading...'}
                        </Box>
                    </Grid>
                    <Grid md={4} xs={12} item>
                        <Box>
                            <Typography variant="body1" sx={{ opacity: 0.5 }}>
                                Plan
                            </Typography>
                            <Typography mt={1} variant="body2">
                                {currentData ? currentData.plan : 'Loading...'}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" mt={{ md: 5, xs: 4 }} sx={{ opacity: 0.5 }}>
                                Dispositivos
                            </Typography>
                            <IconsList title={false} hover={hover} setHover={setHover} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
                gap={6}
            >
                <ImgBase src={Logo} />
                <ImgBase src={Logo} />
                <ImgBase src={Logo} />
            </Box>
            <FooterBox />
        </>
    )
}

export default Typepages
