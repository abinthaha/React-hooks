import React, { useState } from 'react';
import store, { getStore } from '../services/store.service';


export default function SecondSection() {
    
    const [count, setCount] = useState(0);
    store.subscribe(res => {
        setCount(res.count);
    });

    return (
        <div>
            <p>You clicked {count}</p>
        </div>
    )
}