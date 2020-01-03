import { light, dark } from '../Theme'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import React from 'react'
import GlobalStyles from '../GlobalStyles'

interface Props {
    children?: any
}

export default ({ children }: Props) => {
    const { value } = useDarkMode(false, { storageKey: undefined, onChange: undefined })
    const theme = value ? dark : light

    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    const body = (
        <ThemeProvider theme={theme}>
            <GlobalStyles.ResetStyles />
            {children}
        </ThemeProvider>
    )

    if (!mounted) {
        return (
            <div style={{ visibility: "hidden" }}>{body}</div>
        )
    }

    return body
}