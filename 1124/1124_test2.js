const age = 28;   

if (age < 7) {
  console.log("미취학 아동");
} else if (age >= 7 && age <= 13) {
  console.log("초등학생");
} else if (age >= 14 && age <= 16) {
  console.log("중학생");
} else if (age >= 17 && age <= 19) {
  console.log("고등학생");
} else {
  console.log("성인");
}

const month = 11;   

let season;

if (month >= 3 && month <= 5) {
  season = "봄";
} else if (month >= 6 && month <= 8) {
  season = "여름";
} else if (month >= 9 && month <= 11) {
  season = "가을";
} else if (month === 12 || month === 1 || month === 2) {
  season = "겨울";
}

console.log(season);

const year = 2025;  

const isLeapYear =
  (year % 4 === 0 && year % 100 !== 0) ||
  year % 400 === 0;

if (isLeapYear) {
  console.log(year + "년은 윤년입니다.");
} else {
  console.log(year + "년은 윤년이 아닙니다.");
}


