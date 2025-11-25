// 과제 2 학생 성적 계산 

console.log("== 과제 2 학생 성적 계산 ==");
console.log();

let students = [
    {name: "철수", scores: [85, 90, 78]},
    {name: "영희", scores: [92, 88, 95]},
];

for(const student of students) {
    let sum = 0;

    for(const score of student.scores){
        sum += score;
    }

    const average = sum / student.scores.length;

    console.log(`${student.name}의 평균 점수: ${average.toFixed(2)}`)
};
