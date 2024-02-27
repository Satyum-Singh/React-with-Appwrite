import { useState, useEffect, useRef } from 'react'

function Index() {

    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const inputRef = useRef < HTMLInputElement | null > (null)

    const increment = () => {
        setCount(count + 1);
        countRef.current = countRef.current + 1;
        console.log(countRef.current);
        console.log(count);
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={increment}>Increment</button>
            <input ref={inputRef} type="text" placeholder="Type something..." name="" id="" />
        </div>
    )
}

export default Index

