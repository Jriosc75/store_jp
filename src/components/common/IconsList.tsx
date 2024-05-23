import { Box, Tooltip, Typography, useTheme } from '@mui/material'
import TabletMacIcon from '@mui/icons-material/TabletMac'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import LaptopIcon from '@mui/icons-material/Laptop'

interface Props {
    hover: boolean
    setHover: React.Dispatch<React.SetStateAction<boolean>>
    title: boolean
}

export default function IconsList({ hover, setHover, title = false }: Props) {
    const { palette } = useTheme()
    return (
        <Box
            mt={1}
            display={'flex'}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            alignItems={'center'}
            sx={{ opacity: 0.65 }}
        >
            {title && (
                <Typography
                    variant="body1"
                    fontSize={12}
                    color={hover ? palette.secondary.main : palette.primary.contrastText}
                    sx={{
                        fontSize: hover ? 0 : 12,
                        transition: 'font-size 1s ease',
                    }}
                >
                    Adaptado para:
                </Typography>
            )}
            <Tooltip title="Tablet" arrow>
                <Box
                    sx={{
                        background: hover ? palette.primary.main : 'transparent',
                        borderRadius: 1,
                        height: 28,
                        width: 28,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mr: hover ? 1 : 0,
                    }}
                >
                    <TabletMacIcon
                        sx={{
                            color: palette.primary.contrastText,
                            fontWeight: hover ? 400 : 200,
                            fontSize: 15,
                            transition: 'font-size 1s ease',
                        }}
                    />
                </Box>
            </Tooltip>
            <Tooltip title="Celular" arrow>
                <Box
                    sx={{
                        background: hover ? palette.primary.main : 'transparent',
                        borderRadius: 1,
                        height: 28,
                        width: 28,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mr: hover ? 1 : 0,
                    }}
                >
                    <PhoneAndroidIcon
                        sx={{
                            color: palette.primary.contrastText,
                            fontWeight: hover ? 400 : 200,
                            fontSize: 18,
                            transition: 'font-size 1s ease',
                        }}
                    />
                </Box>
            </Tooltip>
            <Tooltip title="Escritorio" arrow>
                <Box
                    sx={{
                        background: hover ? palette.primary.main : 'transparent',
                        borderRadius: 1,
                        height: 28,
                        width: 28,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <LaptopIcon
                        sx={{
                            color: palette.primary.contrastText,
                            fontWeight: hover ? 400 : 200,
                            fontSize: 20,
                            transition: 'font-size 1.5s ease',
                        }}
                    />
                </Box>
            </Tooltip>
        </Box>
    )
}
