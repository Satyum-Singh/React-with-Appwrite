import React, { useState } from 'react'
import FunctionContextComponent from './FunctionContextComponent'
import { ThemeProvide } from './ThemeContext'

function App() {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  )
}

export default App
