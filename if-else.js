let some = 0;
if (some > 2) {
    // блок код
} else if (some < 2) {
    // еще какоц-то код
} else if (some < 2) {
    // еще какоц-то код
} else if (some < 2) {
    // еще какоц-то код
} else {
    // всегда послений
}


// a*x*x + b*x + c = y
let a = -1;
let b = -1;
let c = 16;

let disc = b*b - 4*a*c;
if (disc < 0) {
    console.log('Корней нет');
} else if (disc == 0) {
    let root = -b / (2 * a);
    console.log('Один корень = ', root);
} else {
    let sqrtOfDics = Math.sqrt(disc);
    let root1 = (-b + sqrtOfDics) / (2 * a);
    let root2 = (-b - sqrtOfDics) / (2 * a);
    console.log(
'Два корня: x1 = ', root1,' , x2 = ', root2);
}




if('морозно') console.log('на улице холодно')
if('') console.log('на улице холодно')