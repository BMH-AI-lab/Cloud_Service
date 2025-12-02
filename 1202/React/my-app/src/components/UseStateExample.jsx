import { useState } from "react";

function UseStateExample() {
  //   let count = 0;
  const [count, setCount] = useState(0);

  const increase = () => {
    // count = count + 1;
    // count = 0
    // count += 1
    setCount(count + 1);
    console.log(count);
  };

  const decrease = () => {
    setCount(count - 1);
    console.log(count);
  };

  const reset = () => {
    setCount(0);
    console.log(count);
  };

  const double = () => {
    setCount(count * 2);
    console.log(count);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>증가</button> 
      <button onClick={decrease}>감소</button>
      <button onClick={reset}>초기화</button>
      <button onClick={double}>2배</button>
    </div>
  );
}

export default UseStateExample;