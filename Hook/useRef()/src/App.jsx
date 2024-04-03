// useRef() is used to access the DOM element directly. It is used to store the reference of the DOM element. 
// It is used to access the previous state value. It is used to store the previous state
// useRef is primarily used to persist values between renders without causing a re-render when the value changes.
// It returns a mutable ref object whose.current property is initialized to the passed argument.
// The.current property can hold any value, and it persists between renders without causing a re - render.
// useState is used for managing stateful values that trigger re - renders, while useRef is used for accessing and persisting mutable values that do not trigger re - renders.

import { useState, useRef, useEffect } from 'react'

export default function App() {
  const [name, setName] = useState('')
  const renderCount = useRef(1)
  // const inputRef = useRef()

  // function focus() {
  //   inputRef.current.focus()
  // }

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, [name])

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I have rendered {renderCount.current} times</div>
      <button onClick={focus}> Focus</button>
    </div>
  )
}