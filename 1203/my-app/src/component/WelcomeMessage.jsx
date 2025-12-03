import React, { useEffect, useState } from 'react'

export default function WelcomeMessage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("컴포넌트가 처음 마운트 되었습니다.");
    setMessage("환영합니다.");
  }, []);
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("반갑습니다.")}>메세지 변경</button>
    </div>
  )
}

