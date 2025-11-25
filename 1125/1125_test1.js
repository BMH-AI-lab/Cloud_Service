let fruits = ["복숭아", "수박", "포도", "딸기", "오렌지"]

// for문 모든 요소 출력 
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
};
console.log();
console.log();

// for.....of 모든 요소 출력 
for (const fruit of fruits) {
  console.log(fruit);
}

console.log();
console.log();
// forEach 모든 요소 출력 
fruits.forEach(fruits=> {
  console.log(fruits);
});