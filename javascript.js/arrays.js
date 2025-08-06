// arryas are collections of elements of any types//
// arrys are dynamic  - can be modified at run time //


const mynum = [4,16,'hello,true,undefined'];
console.log(typeof(mynum));

console.log(Array.isArray(mynum));

//indexing//
const fruits = ['apple', 'mango', 'pineapple', 'kiwi', 'guava'];
console.log(fruits[2]);
console.log(fruits.indexOf('guava'));
console.log(fruits.indexOf('pineapple'));
console.log(fruits.at(3));
console.log(fruits.at(-4));

// also works with strings//
fruits[3] = 'watermeleon';
console.log(fruits);

const movies = ['Saiyaara','Spiderman','Avenger','Harry potter','bahubali'];
//slicing//
// also works with strings//
console.log(movies.slice(1,4));
console.log(movies.slice(2,5));
console.log(movies.slice(-3,-1));
console.log(movies.slice(-4));


// adding and removing elements//

movies.push('Batman'); // add element to end//
console.log(movies);
movies.unshift('Man of Steel'); // adds element at start

console.log(movies);

movies.pop();
movies.shift();

console.log(movies);

//inserting and removing elements //

movies.splice(3,2);
console.log(movies);

movies.splice(1,2);
console.log(movies);

movies.splice(-4);
console.log(movies);

movies.splice(1,0, 'Thor', 'Clayface'); // inserting element//
console.log(movies);

movies.splice(0,1,'Thor','Clayface');//replacing element//
console.log(movies);

console.log(movies.length);


