import React, { useEffect, useState, useRef } from 'react';

const MainPage = () => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();
    
    useEffect(() => {
        prevCountRef.current = count;
    });
    
    const prevCount = prevCountRef.current;
    
    return (
        <div>
        <p>Now: {count}, before: {prevCount}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default MainPage;