import './App.css'
import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += '0123456789';
    if (symbolAllowed) str += '!@#$%^&*()_+';
    for (let i = 1; i <= length; i++) {
      const index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
    }
    setPassword(pass);
  }, [length, numberAllowed, symbolAllowed])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, symbolAllowed])


  const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-3xl font-bold mb-2 text-center'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef} />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassword}>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)} name="" id="" />
          <label htmlFor='length'> Length : {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numberAllowed} onChange={() => {
            setNumberAllowed((prev) => !prev)
          }} name="" id="" />
          <label htmlFor='number'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={symbolAllowed} onChange={() => {
            setSymbolAllowed((prev) => !prev)
          }} name="" id="" />
          <label htmlFor='symbols'>Symbols</label>
        </div>
      </div>



    </div>
  )
}

export default App
