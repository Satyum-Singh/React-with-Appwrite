// useEffect is a hook that allows you to perform side effects in function components. It is a close replacement for componentDidMount, componentDidUpdate, and componentWillUnmount in class components.
// It is called after every render of the component. It is used to fetch data, add event listeners, and perform side effects. 
// It is a function that takes two arguments, a callback function and an array of dependencies. The callback function is called after every render of the component. 
// The array of dependencies is an optional argument that allows you to control when the effect is called. If the array is empty, the effect is called only once 
// after the initial render. If the array contains values, the effect is called whenever one of the values changes. 
// If the array is not provided, the effect is called after every render. The effect can return a cleanup function that is called before the component is unmounted. 
// The cleanup function is used to clean up resources like event listeners and subscriptions. The effect can also return a value that is used to clean up the effect. 
// The effect is called after every render of the component. It is used to fetch data, add event listeners, and perform side effects. 
// It is used to synchronise the state of the component with the external world. It is used to perform side effects like fetching data, adding event listeners, and updating the DOM.

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
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre> 
        })}
    </>
  )
}

export default App
