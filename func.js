// Объвяление функции
function sayHi(who, adj) {
    console.log('Привет', adj, who);
}
let name = 'Габи'
// Вызов функции
//sayHi();
//sayHi('Федот', 'Ты классный');
//sayHi(name);


function linear(x) {
    return 4*x + 10;
}

//console.log(linear(1), linear(5), linear(9));


function hyper(x) {
    if (x === 0) {
        return 'Не ОДЗ'
    } else {
        return 5 / x;
    }
}

// Способы объяления функций

function sum(a, b) {
    return a + b;
}

let sum2 = function (a, b) {
    return a + b;
}

let sum3 = sum;

console.log(sum(1, 5))
console.log(sum2(1, 5))
console.log(sum3(1, 5))

let multi = (a, b) => a*b;
let multiBig = (a, b) => {
    return a * b;
}
// let multi = function (a, b) {
//     return a*b;
// }

let sayWelcome = () => console.log('Добро пожаловать');
let sayForbidden = () => console.log('Доступ запрещен');

function checkMe(age, yes, no) {
    if(age > 14) {
        no()
    } else {
        yes()
    }
}

checkMe(16, sayWelcome, sayForbidden)







