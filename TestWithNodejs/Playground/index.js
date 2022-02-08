// (function test(/* test */) {
//   console.log("Immediately run function");
// })();

/*
const obj = {
  a: "one",
  b: "two",
  a: "three",
};
console.log(obj); // { a: 'three', b: 'two' }
*/

/*
function getAge(...args) {
  console.log(typeof args); // object
}
getAge(21);
*/

/*
const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 456;
console.log(a); // { '[object Object]': 456 }
console.log(a[b]); // 456
*/

/*
function bark() {
  console.log("woff!");
}
bark.animal = "dog";
console.log(bark); // [Function: bark] { animal: 'dog' }
console.log(bark.animal); // dog
*/

/*
let c = { greeting: "Hey" };
let d;
d = c;
c.greeting = "Hello";
console.log(d.greeting); // Hello
*/

/*
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1); // 3 3 3
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1); // 1 2 3
}
*/
