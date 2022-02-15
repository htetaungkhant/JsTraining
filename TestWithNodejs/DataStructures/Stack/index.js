const Stack = require('./stack');

const fruits = new Stack();

fruits.push('Apple');
fruits.push('Orange');
fruits.push('Banana');
fruits.push('PineApple');
console.log(fruits);

console.log(fruits.pop());
console.log(fruits);

console.log(fruits.peek());
console.log(fruits);

console.log(fruits.getSize());
console.log(fruits.isEmpty());
