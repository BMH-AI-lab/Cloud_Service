// 객체 

let personName = "홍길;동"
let personAge = 25;
let personCity = "서울";

let person = {
    name: "홍길동", 
    age: 25, 
    city: "서울", 
}

console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log();

console.log(person["age"]);
console.log(person["city"]);
console.log();

let key = "city";
console.log(person[key]);

person.job = "개발자"
console.log(person);
console.log();

person.age = 30;
console.log(person.age);
console.log();

delete person.city;
console.log(person.city);
console.log();


