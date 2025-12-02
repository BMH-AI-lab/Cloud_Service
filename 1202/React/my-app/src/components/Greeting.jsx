import { useState } from "react";


function Greeting(){
    const[name, setName] = useState("");    

    const btnclick = (newName) => {
        setName(newName);
        console.log("현재 이름: ", newName)
    };

    return (
        <div>
            {/* <h2>안녕하세요 {name}</h2> */}
            <input type="text" value={name} 
            onChange={e => setName(e.target.value)} placeholder="이름입력" />
            {name && <p>안녕하세요. {name}</p>}
            {/*!name && <p>이름을 입력해주세요.</p>*/}

            {/*<button onClick={() => btnclick("홍길동")}>홍길동</button>*/}
            {/*<button onClick={() => btnclick("김철수")}>김철수</button>*/}
            {/*<button onClick={() => btnclick("초기화")}>초기화</button>*/}
        </div>

    );
}

export default Greeting