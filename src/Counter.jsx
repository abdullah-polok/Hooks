import { useState } from "react"

export default function Counter() {

    const [counter, setCounter] = useState(0)
    function counterIncrease() {
        const newCounter = counter + 1
        setCounter(newCounter)
    }
    function counterDecrease() {
        const newCounter = counter - 1
        setCounter(newCounter)
    }
    return (
        <div style={{ border: '2px solid red', padding: "40px" }}>
            <h1>Counter: {counter}</h1>
            <button onClick={counterIncrease}>Increment</button>
            <button onClick={counterDecrease}>Decrement</button>
        </div>
    )
}