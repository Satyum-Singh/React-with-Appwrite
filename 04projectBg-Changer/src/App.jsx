import './App.css'
import { useState } from 'react'

function App() {

  const [color, setColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200 ' style={{ backgroundColor: color }} >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-6 py-4 rounded-3xl'>
          <button onClick={() => setColor('red')} className='outline-none px-5 py-2 rounded-full text-white shadow-lg bg-red-700'>Red</button>
          <button onClick={() => setColor('green')} className='outline-none px-5 py-2 rounded-full text-white shadow-lg bg-green-700'>Green</button>
          <button onClick={() => setColor('blue')} className='outline-none px-5 py-2 rounded-full text-white shadow-lg bg-blue-700'>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
