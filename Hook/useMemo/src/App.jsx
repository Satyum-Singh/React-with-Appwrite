// useMemo is a hook that will only recompute the memoized value when one of the dependencies has changed. 
// This optimization helps to avoid expensive calculations on every render.
// It is a performance optimization feature that is used to memoize the output of a function.
// It is similar to useCallback, but useCallback returns the function itself, while useMemo calls the function and returns the result.
// useMemo can also be used for referential equality, but it is mostly used for performance optimization.


import { useEffect } from 'react'
import { useState, useMemo } from 'react'

function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  useEffect(() => {
    console.log('Theme Changed');
  }, [themeStyles])

  return (
    <>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

function slowFunction(num) {
  console.log('Calling Slow Function')
  for (let i = 0; i <= 100000; i++) { /* empty */ }
  return num * 2
}

export default App;
