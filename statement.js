// Операторы в JS

// Унарные операторы
let positiveNum = +4;
let negativeNum = -4;

let count = "45";
let countAsNum = -count;
// Number(count) ==== +count
console.log(typeof countAsNum, countAsNum);


let isHide = "yes";
let isHideBool = !-isHide;
console.log(typeof isHideBool, isHideBool);


// Математика
// * / + -
let constellations = 45;
let medCount = 7;
let countOfStars = constellations * medCount;
console.log('Я вижу ' + countOfStars + " звезд");

console.log('Остаток от деления:', 5 % 6);
console.log('Возведение в степень:', 5 ** 3);

// Сокращенные операторы

let age = 17;
age = age + 1;
age += 1;
age++; // инкремент
++age; // инкремент

let daysInYear = 0;
daysInYear = daysInYear + 7;
daysInYear += 7;
// daysInYear++;

let dumby = 4;
console.log(dumby); //   4
console.log(dumby++); // 4
console.log(dumby); //   5
console.log(++dumby); // 6
console.log(dumby); //   6

console.log(dumby++ + ++dumby + dumby++);
//             6          8        8

dumby *= 3; // dumby = dumby * 3
dumby /= 6; // dumby = dumby / 6
dumby -= 8; // dumby = dumby - 8
dumby %= 2; // dumby = dumby % 2
dumby **= 5; // dumby = dumby ** 2

// декремент
dumby--;
--dumby;

//  Логика (Логические операторы)

let myAge = 18;
console.log(myAge > 30);
console.log(myAge >= 18);
console.log(myAge < 50);
console.log(myAge <= 50);

console.log(myAge == 30) // равенство
console.log(myAge != 30) // неравенство

console.log('----------------------')
console.log('А' > 'Б')


console.log('3' > '4')

console.log('11' > '2')
console.log('2' > '11')

// Равенство строгое и нестрогое с т.з. типа
console.log('----------------------------')
console.log('1' == 1)
console.log('1' === 1)
console.log(null == undefined)

// И(&&) ИЛИ(||) НЕ(!)

let coordX = 0.5;
console.log(coordX > 2 && coordX < 10);

// Не входит в диапазон от 2 до 10
console.log(coordX < 2 || coordX > 10);
console.log(!(coordX >= 2 && coordX <= 10));


true || console.log('я после тру ИЛИ')
false || console.log('я после фолс ИЛИ')
console.log('я после тру И') || console.log('я после фолс И')
