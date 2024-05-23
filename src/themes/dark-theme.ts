import { createTheme } from '@mui/material/styles'

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#EFEFEF',
            contrastText: '#3A3A3A',
        },
        secondary: {
            main: '#547FF7',
            contrastText: '#545454',
        },
        success: {
            main: '#30B836',
        },
        error: {
            main: '#DA4A4A',
        },
        background: {
            paper: '#323232',
            default: '#727272',
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
                    fontSize: 19,
                    fontWeight: 700,
                    color: '#EFEFEF',
                },
                h2: {
                    fontSize: 14.8,
                    fontWeight: 600,
                    color: '#EFEFEF',
                    '@media (max-width: 700px)': {
                        fontSize: 15,
                    },
                },
                h3: { fontSize: 16, fontWeight: 700, color: '#EFEFEF' },
                h4: {},
                h5: {},
                subtitle1: { fontSize: 10, fontWeight: 400, color: '#EFEFEF' },
                subtitle2: { fontSize: 12, fontWeight: 400, color: '#EFEFEF' },
                body1: {
                    fontSize: 14,
                    fontWeight: 400,
                    opacity: 0.94,
                    color: '#EFEFEF',
                },
                body2: {
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#EFEFEF',
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: { borderRadius: '6px', boxShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.10)' },
            },
        },
    },
})
