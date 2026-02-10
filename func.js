// Объвяление функции
function sayHi(who, adj) {
    console.log('Привет', adj, who);
}
let name = 'Габи'
// Вызов функции
sayHi();
sayHi('Федот', 'Ты классный');
sayHi(name);


function linear(x) {
    return 4*x + 10;
}

console.log(linear(1), linear(5), linear(9));


function hyper(x) {
    if (x === 0) {
        return 'Не ОДЗ'
    } else {
        return 5 / x;
    }
}






