import '../App.css'
import { Box, Typography, useTheme } from '@mui/material'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Logo from '../assets/logo.png'
import CardStores from '../components/Home/CardStores'
import FooterBox from '../components/footer/FooterBox'
import data from '../data.json'
function Home() {
    const { palette } = useTheme()
    const [text] = useTypewriter({
        words: ['negocio', 'tienda', 'negocio'],
        loop: false,
        delaySpeed: 3000,
    })

    const [title] = useTypewriter({
        words: ['Tenemos para ti'],
        loop: false,
        delaySpeed: 21000,
    })

    return (
        <>
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
                mt={{ md: 18, xs: 22 }}
            >
                <img src={Logo} height={47} width={25} style={{ opacity: 0.8 }} />
                <Typography
                    variant="body1"
                    mb={3}
                    fontSize={11}
                    textAlign={'center'}
                    sx={{ letterSpacing: 6, opacity: 0.8 }}
                >
                    BIENVENIDO
                </Typography>
                <Typography
                    sx={{ display: { md: 'flex', sm: 'flex', xs: 'none' } }}
                    textAlign={'center'}
                    variant="h1"
                >
                    <span style={{ color: palette.secondary.main, marginRight: '8px' }}>
                        Transformamos
                    </span>{' '}
                    tu {text}
                </Typography>
                <Typography
                    sx={{ display: { md: 'none', sm: 'none', xs: 'flex' } }}
                    textAlign={'center'}
                    flexDirection={'column'}
                    variant="h1"
                >
                    <span style={{ color: palette.secondary.main }}>
                        Transformamos <br />
                    </span>
                    tu {text}
                </Typography>
                <Cursor />
                <Typography
                    variant="body1"
                    fontWeight={200}
                    sx={{ opacity: 0.6, maxWidth: 540 }}
                    textAlign={'center'}
                >
                    Impulsamos tu presencia digital con tiendas virtuales únicas y personalizadas,
                    combinando experiencia técnica y creatividad.
                </Typography>
            </Box>
            <Box
                display={'flex'}
                mt={{ md: 40, xs: 35 }}
                mb={10}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
            >
                <Typography textAlign={'center'} variant="h1" mb={2}>
                    {title}
                </Typography>
                {data.type_stores.map((item) => (
                    <CardStores id={item.id} title={item.title} key={item.id} mt={3} />
                ))}
            </Box>
            <FooterBox />
        </>
    )
}

export default Home
