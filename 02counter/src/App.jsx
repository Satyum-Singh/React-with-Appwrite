import './App.css'
import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }
  const removeValue = () => setCounter(counter - 1);

  return (
    <>
      <h1>React Course with Satyum</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button > {" "}
      <button onClick={removeValue} > Remove value</button >
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
