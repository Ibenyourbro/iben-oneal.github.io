/**VARIABLES
 * slash,astrick,astrick
 * 0. To hold things in memory during the life cycle of a program,
 * we can use variables. Variables are named identifiers that can
 * point to values of a particular type, like a Number,String,
 * Boolean,Array,Object or another data type. Variables are called
 * so because once created, we can CHANGE the value (and type )
 * to which they point.
 * 
 * 1. To Create a variable we use the keyword,var, followed by
 * a name (id or alias ) for our variable.
 * 
 * 2. There are 2 phases of using variables: declaration and
 * initalization (or assignment).
 * 
 * 3.You can re-assign variables created using var and let. This 
 * can change the value and type of said data.
 * 
 * 4.There are 3 distinct ways to create a variable.
 * Var: creates a variable that is hoisted to the global scope.
 * This variable can be re assigned and does not give an error
 * when two variables have the same name.
 * 
 * 
 * 5.Hoisting is a JS mechanism where variables and function declarations are moved to the top of their code before the code is executed.
 * When it comes to variables this only applies to the var keyword.
 * 
 * let: Creates a variable that only has block scope. Can be reassigned 
 * 
 * 
 */


// 1. declaration //
// At the declaration phase, the variable myName is undefined because we have not initalized it to anything
var myName;
console.log(myName) // prints => undefined

// 2. Initialization or assignment
// When we assign a value to an undeclared variable
myName = 'Iben';
console.log(myName); //prints => Iben

//3. Re-assignment
// Changing or updating the value of a previously assigned variable
myName = 'rondo';
console.log(myName) // prints => rondo

//4. Var,let,const
// These are the 3 keywords used to create variables in JS. They each function slightly diffrently when it comes to scope,declaration,hoisting and reassigment.
// Var : Can be declared without a value,has global scope, is always hoisted to the top, and can be reassgined at anytime.

var word;
word = 'hello';
console.log(word); // prints => hello
word = 'dog';
console.log(word); // prints => dog

// let : Can be declared without a value, is block scoped, does not get hoisted, and can be reassigned at anytime.

let i;
i = 'HoneyBaked';
console.log(i); // prints => HoneyBaked
for(let i = 0; i < 2; i++){
    console.log(i); // prints => 0
}

// Const: Can not be delcared without a value, is block scoped, does not get hoisted, can not be reassigned;
const seven; // produces an error
const eight = 8;
eight = 9; // produces an error

//5.Hoisting
// var is the only variable that gets hoisted, because of this you will not get an error if you call the variable before it is initialied.

console.log(cheese); // prints => undefined
console.log(turkey); // gives an error that variable is not initalized
console.log(bacon); // gives an error that variable is not initalized

var cheese = 'Havarti';
let turkey = 'HoneyBaked';
const bacon = 'applewoood';