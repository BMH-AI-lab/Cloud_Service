import React, { useEffect, useState } from 'react';

export default function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const timeString = currentTime.toLocaleTimeString();

    return (
        <div>
            <h2>현재 시간</h2>
            <div>{timeString}</div>
        </div>
    );
}