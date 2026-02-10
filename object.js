let dog = {
    color: 'Шоколадный',
    name: 'Габи',
    weight: 13.3,
    weight: 5555,
    height: 1.2,
    age: 11,
    allergic: false,
    owner: {
        name: 'Герман',
        age: 30,
    }
}

console.log(dog);
dog.weight = 13.1;
dog.owner.age++;

console.log(dog.owner.name)

// Массивы
let arrayOfThings = [
    true,
    34,
    'Петя',
    dog,
    { hi: 'Say hi' },
    null,
    undefined,
    { a: { b : { c: { d: "Почему я тут?" } } } }
];

// console.log(arrayOfThings);
arrayOfThings[2] = 'Вася';
arrayOfThings[1] = '34'

console.log(arrayOfThings)





