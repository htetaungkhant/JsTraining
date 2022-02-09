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

/* 
const obj = {
  testFun: () => {
    console.log("gg");
  },
};
obj["testFun"](); // gg
 */

/* 
function testUseStrict() {
  "use strict";

  return this;
}
console.log(testUseStrict()); // undefined if 'use strict', if not 'use strict', it is global object
 */

/* 
let myObj = { value: "my object" };
global.value = "global object";
function testGlobalObject(name) {
  return this.value + " " + name;
}
console.log(testGlobalObject()); // global object undefined
console.log(testGlobalObject.call(myObj)); // my object undefined
console.log(testGlobalObject.apply(myObj)); // my object undefined
console.log(testGlobalObject.call(myObj, "bob")); // my object bob
console.log(testGlobalObject.apply(myObj, ["bob"])); // my object bob
 */

/* 
let test = ["a", "b", "c", 1, 2];
console.log(`test ${...test}`); // error occur
 */
