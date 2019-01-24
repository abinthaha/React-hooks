import React, { useState, useEffect } from 'react';

export default function Foo(count) {
    
    console.log(count)
    return (
        <div>
            <p>You clicked {count.count}</p>
        </div>
    )
}