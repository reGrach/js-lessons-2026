let easyStr = '   Клуб космонавтики - это всё!   ';

console.log(easyStr);
console.log(easyStr.length)

console.log(easyStr.trim());
console.log(easyStr.trimEnd());
console.log(easyStr.trimStart());

console.log(easyStr.toLowerCase());
console.log(easyStr.toUpperCase());

console.log(easyStr.startsWith('Клуб'));
console.log(easyStr.trim().startsWith('Клуб'));
console.log(easyStr.startsWith('   Клуб'));

console.log(easyStr.endsWith('всё!'));
console.log(easyStr.endsWith('всё!   '));

console.log(easyStr.includes('космонавтики - это'));
console.log(easyStr.includes('lsfjkbnsfgbndlfk'));
console.log(''.includes(''));

console.log(easyStr.substring(0, 7))
console.log(easyStr.substring(3, 20))
console.log(easyStr.trim().split(' '))
console.log(easyStr.trim().split(' ')[1])

console.log(easyStr.charAt(5))
console.log(easyStr.repeat(2))
console.log('А и Б '.repeat(5))
console.log(easyStr.replace('всё', 'кружок'))
console.log(easyStr.replace(' ', '|'))
console.log(easyStr.replaceAll(' ', '|'))



