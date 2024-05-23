import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#000000',
            contrastText: '#DDDDDD',
        },
        secondary: {
            main: '#77A0C9',
            contrastText: '#484848',
        },
        warning: {
            main: '#FF9650',
        },
        success: {
            main: '#8DB352',
        },
        error: {
            main: '#DA4A4A',
        },
        background: {
            paper: '#F3F3F3',
            default: '#C9C9C9',
        },
    },
    typography: {
        allVariants: {
            fontFamily: 'Poppins',
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '4px',
                    padding: '8px 24px',
                    boxShadow: '0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.05)',
                    fontWeight: 400,
                    fontSize: '13px',
                    textTransform: 'none',
                    color: '#fff',
                    '&.Mui-disabled': {
                        background: '#A2A2A2',
                        color: '#fff',
                    },
                    '&:hover': {
                        opacity: 1,
                        boxShadow: 'none',
                    },
                    '@media (max-width: 600px)': {
                        fontSize: 12,
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 42,
                    fontWeight: 600,
                    color: '#DDDDDD',
                    '@media (max-width: 700px)': {
                        fontSize: 32,
                    },
                },
                h2: {
                    fontSize: 32,
                    fontWeight: 500,
                    color: '#DDDDDD',
                    '@media (max-width: 700px)': {
                        fontSize: 15,
                    },
                },
                h3: { fontSize: 16, fontWeight: 700, color: '#DDDDDD' },
                h4: {},
                h5: {},
                subtitle1: { fontSize: 10, fontWeight: 400, color: '#DDDDDD' },
                subtitle2: { fontSize: 12, fontWeight: 400, color: '#DDDDDD' },
                body1: {
                    fontSize: 13,
                    fontWeight: 400,
                    color: '#DDDDDD',
                },
                body2: {
                    fontSize: 14,
                    fontWeight: 400,
                    color: '#DDDDDD',
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '6px',
                    boxShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.10)',
                },
            },
        },
    },
})
