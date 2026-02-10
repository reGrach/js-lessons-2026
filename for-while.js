// Циклы

// Условный цикл

// while(true) {
//     console.log('Это вечный цикл')
// }

// const limit = 15;
// let x = 0;
// while (limit > x) {
//     if (x % 2 == 0) {
//         console.log(x)
//     }
//     x++;
// }

// Циклы со счетчиком
for (let i = 0; i < 5; i++) {
    console.log(i)
}

// ряд Фибоначчи
const limit = 67;
if (limit === 0 || limit === 1) {
    console.log('Число Фибоначчи равно', limit);
}
let sum = 1;
let prevNum = 1;
let prevPrevNum = 0;
for (let i = 1; i < limit; i++) {    
    sum = prevNum + prevPrevNum;
    console.log(sum / prevNum)
    prevPrevNum = prevNum;
    prevNum = sum;
}
console.log('Число Фибоначчи равно', sum);








