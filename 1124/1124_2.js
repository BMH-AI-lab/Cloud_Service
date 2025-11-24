//빈복문 

console.log("안녕하세요 1");
console.log("안녕하세요 2");
console.log("안녕하세요 3");

for (let i=1; i <= 3; i++){
    console.log(`안녕하세요 ${i}`);
}

let sum = 0;
for (let i = 2; i <5; i++) {   // i-- → i++ 로 수정
    sum += i;
    console.log(i);
}

console.log(sum);   // 2~10까지 합 출력


for (let dan = 2; dan <= 9; dan++) {
    console.log(`\n=== ${dan}단 ===`);
    for (let i = 1; i <= 9; i++) {
        console.log(`${dan} × ${i} = ${dan * i}`);
    }
}


let fruits = ['사과', '바나나', '딸기']

