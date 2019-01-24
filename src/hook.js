import React, { useState, useEffect } from 'react';
import Foo from './hook1';

export default function Goo() {
    const [count, setCount] = useState(0);
    console.log ('sdas')

    function componentDidMount() {
    }

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <Foo count={count}/>
        </div>
    )
}