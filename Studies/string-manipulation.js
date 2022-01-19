/**STRING MANIPULATION
 * 0. There are two diffrent ways to manipulate strings, with the operators and with methods.
 * 1. There are two string operators '+' and '+='. They are used to bring two strings together
 * or to concatenate them.
 * 2. Then there are methods, which are built in functions that will do an action to a string.
 */

//With Operators
let x = 'Hello my name is' + ' ' + 'Iben';
console.log(x); // prints => Hello, my name is Iben
let y = x + ' ' + 'and I am coding.';
console.log(y);// prints => Hello, my name is Iben and I am coding.
y += "What's your name?";
console.log(y);// prints => Hello, my name is Iben adn I am coding.What's your name?

// With Methods
const ted = 'Welcome_to_my_TED_Talk';
console.log(ted.replaceAll('_',' ')); // prints => 'Welcome to my TED Talk'

let tedArray= ted.split('_'); // returns ['Welcome','to','my','TED','Talk'];

const tedUpper = ted.toUpperCase(); // toUpperCase() changes all the chracters of a string to their uppercase form.
console.log(tedUpper) // prints => `WELCOME_TO_MY_TED_TALK; 

