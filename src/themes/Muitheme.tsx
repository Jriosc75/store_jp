import { CssBaseline, ThemeProvider } from '@mui/material'
import { ReactNode, useEffect, useState } from 'react'
import { lightTheme } from './light-theme'
import { darkTheme } from './dark-theme'

function getActiveTheme(themeMode: 'light' | 'dark') {
    return themeMode === 'light' ? lightTheme : darkTheme
}

function Muitheme({ children }: { children: ReactNode }) {
    const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('light')

    /*     useEffect(() => {
        setSelectedTheme(theme ? 'dark' : 'light')
    }, [theme]) */
    useEffect(() => {
        setSelectedTheme('light')
    }, [])
    useEffect(() => {
        document.body.style.backgroundColor = selectedTheme === 'light' ? '#F3F3F3' : '#323232'
    }, [selectedTheme])
    const activeTheme = getActiveTheme(selectedTheme)

    return (
        <ThemeProvider key={selectedTheme} theme={activeTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default Muitheme
