import React, { useState, useEffect } from 'react';
import SecondSection from './SecondSection';
import { getStore, setStore } from '../services/store.service';

export default function FirstSection() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        setStore('count', count);
    });
    
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <SecondSection />
        </div>
    )
}