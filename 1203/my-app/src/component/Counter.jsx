import React from 'react'
import { useState, useEffect } from 'react';

export default function Counter() {
    const greeting = "Hello World"
    const [count, setCount] = useState(0);

    console.log("랜더링됨");
    document.title = `count ${count}`;

    //useEffect(() => {
    //  console.log("컴포넌트가 랜더링 되었습니다.");
    //  document.title = greeting;
    //})

    useEffect(() => {
      console.log("랜더링 완료")
      document.title = `count ${count}`
    }, []);
   

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>클릭</button>
        <p>카운트 {count}</p>
        {greeting}
        </div>
  )
}
