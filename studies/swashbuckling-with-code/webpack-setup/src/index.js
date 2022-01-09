import getClasses from './getClasses'

console.log("Ran from index.js");
getClasses();

const obj = { a: 'Alpha', b: 'Bravo' };
const newObj = { ...obj, c: 'Charlie' };
console.log(newObj)