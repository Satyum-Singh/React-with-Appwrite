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