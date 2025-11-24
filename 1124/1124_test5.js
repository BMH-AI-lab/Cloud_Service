console.log("과제 1: 온도 구하기")

function celsiusToFahrenheit(celsius){
    const fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}

console.log(celsiusToFahrenheit(0));    // 32
console.log(celsiusToFahrenheit(100));  // 212
console.log();


console.log("과제 2: 배열 평균 구하기")
function average(numbers){
    let sum = 0;

    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum / numbers.length;
}

console.log(average([10, 20, 30]));  // 20