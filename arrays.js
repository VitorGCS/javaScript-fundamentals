/**********************************
 * Arrays
 */

 var names = ['John', 'Mark','Jane'];
var years = new Array(1998, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);
//Mutate array data
names[1] = 'Ben';
names[5] = 'Mary';
console.log(names);

//different data types
var john = ['John', 'Smith', 1990, 'teacher', false];
console.log(john);
john.push('blue');
console.log(john);
john.unshift('Mr.');//add first element
console.log(john);
john.pop();//remove the last element
john.shift()//remove the first element
console.log(john);

console.log(john.indexOf(1990));