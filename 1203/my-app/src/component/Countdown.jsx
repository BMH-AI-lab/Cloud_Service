import React, { useState, useEffect } from 'react';

export default function Counter() {
    const [time, setTime] = useState(10);        
    const [isRunning, setIsRunning] = useState(false);  

    useEffect(() => {
        let timer;

        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime((prev) => prev - 1);
            }, 1000);
        }

        if (time === 0) {
            setIsRunning(false); 
        }

        return () => clearInterval(timer);
    }, [isRunning, time]);

    return (
        <div>
            <h2>⏱ 카운트다운</h2>
            <h3>
                {time > 0 ? `${time}초` : "시간종료!!"}
            </h3>

            <button onClick={() => setIsRunning(true)}>시작</button>
            <button onClick={() => setIsRunning(false)}>정지</button>
            <button onClick={() => { setTime(10); setIsRunning(false); }}>
                리셋
            </button>

        </div>
    );
}
