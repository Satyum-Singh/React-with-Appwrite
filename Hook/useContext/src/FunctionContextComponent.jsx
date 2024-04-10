import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

function FunctionContextComponent() {
    const dark = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <>
            <button onClick={toggleTheme}>Change Theme</button>
            <div style={themeStyles}>FunctionContextComponent</div>
        </>
    )
}

export default FunctionContextComponent