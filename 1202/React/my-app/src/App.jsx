/**
 * App 컴포넌트 - 메인 애플리케이션 컴포넌트
 *
 * 📚 학습 자료: docs/03-jsx.md 참고
 */

import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import UseStateExample from "./components/UseStateExample";
import Greeting from "./components/Greeting";
import { useState } from "react";

function App() {
  const title = "첫 React 앱";
  const year = 2025;
  const subjects = ["HTML", "CSS", "JavaScript", "React"];

  const [likes, setLikes] = useState(0);

  return (
    <div className="App">
      {/* <Header /> */}

      <header>
        <h1>{title}</h1>
        <p> 현재 연도 : {year}</p>
      </header>

      <main>
        <h2>학습 과목</h2>
        <ul>
          {subjects.map((subject, index) => {
            return <li key={index}>{subject}</li>;
          })}
        </ul>
      </main>

      {/* <p>좋아요: {likes}</p>
      <button onClick={() => setLikes((pre) => pre + 1)}>좋아요</button> */}

      {/* <Footer /> */}

      <Profile />
      <UseStateExample />
      <Greeting />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;

// useState Hook
// React 갈고리?
// 벽(React 함수형 컴포넌트)
// 갈고리 (Hook)를 걸어서
// 옷이나 가방(state, 생명주기 등의 기능)을 걸어서 사용

// 간결성: 클래스보다 코드가 짧고 명확
// 재사용성: 로직을 쉽게 분리하고 재사용
// 이해도: this 바인딩 같은 복잡한 개념 불필요
// 최신 트랜드: React의 미래 방향성

// 팁: "use"로 시작하는 함수는 모두 Hook 입니다.
// useState (상태관리)
// useEffect (부작용 처리)
// useContext (전역 상태)
// useRef (DOM 참조)

// useState
// 사람의 뇌가 기억하는 것
// state(상태) = 기억해야 하는 정보
// const likes = 0;
// setState = 새로운 정보로 기억 업데이트
// const setLikes = () => {};
// 리렌더링 = 업데이트된 기억을 바탕으로 다시 생각하기

// function 사람() {
//   // 사람의 현재 기분을 기억
//   const [기분, 기분바꾸기] = useState("좋음");

//   // 나쁜 일이 생기면 기분이 바뀜
//   const 나쁜일발생 = () => {
//     기분바꾸기("나쁨"); // 기억 업데이트
//     // 자동으로 사람의 표정이 바뀜(리렌더링)
//   };

//   // 왜 변수가 아니라 useState를 써야 하나?
//   const 기분 = "좋음";
//   const 나쁜일발생 = () => {
//     기분 = "나쁨";
//   };

//   return <div>{기분}</div>;
// }