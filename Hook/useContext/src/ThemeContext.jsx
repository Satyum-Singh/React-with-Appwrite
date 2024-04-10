import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}


export function ThemeProvider({ children }) {
    const [dark, setDark] = useState(true)
    function toggleTheme() {
        setDark(prev => !prev)
    }

    return (
        <ThemeContext.Provider value={dark}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}