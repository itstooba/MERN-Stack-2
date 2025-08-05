// arryas are collections of elements of any types//
// arrys are dynamic  - can be modified at run time //


const mynum = [4,16,'hello,true,undefined'];
console.log(typeof(mynum));

console.log(Array.isArray(mynum));


const fruits = ['apple', 'mango', 'pineapple', 'kiwi', 'guava'];
console.log(fruits[2]);
console.log(fruits.indexOf('guava'));
console.log(fruits.indexOf('pineapple'));
console.log(fruits.at(3));
console.log(fruits.at(-4));


fruits[3] = 'watermeleon';
console.log(fruits);

