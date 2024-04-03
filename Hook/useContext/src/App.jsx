import { useState } from 'react'

function App() {
  const [dark, setDark] = useState(true)
  function toggleTheme(){
    setDark(prev => !prev)
  }

  return (
    <>
      
    </>
  )
}

export default App
