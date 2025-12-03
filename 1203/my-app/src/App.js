import { useState, useEffect } from 'react';
import './App.css';
import WelcomeMessage from './component/WelcomeMessage';
import Counter from './component/Counter';
import SearchResults from './component/SearchResults';
import SimpleTimer from './component/SimpleTimer';
import Clock from './component/Clock';
import ScrollPosition from './component/ScrollPosition';
import Countdown from './component/Countdown';


//useEffect
//React의 함수형 컴포넌트에서 부수 효과를 처리하기 위한 Hook

function App() {
  
  return ( <div className="App">
    <WelcomeMessage />
    <br />
    <br />
    <br />
    <Counter />
    <br />
    <br />
    <br />
    <SearchResults />
    <br />
    <br />
    <br />
    <SimpleTimer />
    <br />
    <br />
    <br />
    <Clock />
    <br />
    <br />
    <br />
    <ScrollPosition />
    <br />
    <br />
    <br />
    <Countdown />
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
