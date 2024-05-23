import { Box } from '@mui/material'
import CardContac from '../Home/CardContac'

export default function FooterBox() {
    return (
        <Box
            display={'flex'}
            mt={{ md: 20, xs: 10 }}
            mb={{ md: 10, xs: 4 }}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
        >
            <CardContac mt={0} />
        </Box>
    )
}
