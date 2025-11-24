// 과제 1

console.log("과제 1");
let sum = 0;
for (let i = 1; i <101; i++) {   // i-- → i++ 로 수정
    sum += i;
}

console.log(sum);
console.log();


// 과제 2
console.log("과제 2");
for (let i = 1; i < 6; i++){
    let space = " ".repeat(5 - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(space + stars)
}

console.log();

// 과제 3
console.log("과제 3");
for (let dan = 2; dan <= 9; dan++) {
    console.log(`\n=== ${dan}단 ===`);
    for (let i = 1; i <= 9; i++) {
        console.log(`${dan} × ${i} = ${dan * i}`);
    }
}


