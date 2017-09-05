const Manipulator = require('./Manipulator');
const wordReverser = require('./reverseWord');
const listReverser = require('./reverseItems');

let fruits = ["Banana", "Kiwi", "Apple"];

let manipulator = new Manipulator(listReverser, wordReverser);
let manipulatedList = manipulator.execute(fruits);

console.log(manipulatedList);