import { useState, useEffect } from 'react'

function App() {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItem] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(res => res.json())
      .then(json => setItem(json))
  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => { return <pre>{JSON.stringify(item)}</pre> })}
    </>
  )
}

export default App
