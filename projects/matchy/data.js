/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = 'Dog';
animal['name'] = 'Nova';
animal.noises = [];
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'Bark';
noises.push('Meow');
noises.unshift('Purr');
noises[noises.length] = ('Roar');
console.log(noises.length);
console.log(noises[noises.length -1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
animal.noises.push("Woof");
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * You can use dot notation or bracket notation.
 *
 * 2. What are the different ways of accessing elements on arrays?
 *  You can use bracket notation.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);

var leo = { species: 'bird', name: 'Leo', noises: ['chrip', 'tweet', 'hmmm', 'squack'] };
animals.push(leo);
var peni = { species: 'dog', name: 'Peni', noises: ['mhmhm', 'woof', 'bark', 'roof'] };
animals.push(peni);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I choose an array, this was to make sure the structure was a set list of names that I could display in order.
var friends = [];

function getRandom(arr){
  let randomIndex = Math.floor(Math.random() * arr.length);
  return randomIndex
};

friends.push(animals[getRandom(animals)].name);
animals[getRandom(animals)]['friends'] = friends;




/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}