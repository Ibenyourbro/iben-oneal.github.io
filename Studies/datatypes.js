/** DATATYPES
 * 0. Data types refer to the type of data being held in a variable. JS is a dynamic language meaning variables are not 
 * directly associated with any particular value type, and that any variable can be assigned (and re asddigned) to all types
 * of data.
 * 1.There are 2 diffrent kinds of data types primitive and complex data types.
 * 2. All Primitive Data is immutable, meaning it can't be changed.
 * 3. Complex data types all refer to diffrent types of objects.
 * 4. A key diffrence between a simple and complex data types are how they are accesed in
 * memory. Simple Data types hold a value and when that value is set to a variable, the variable 
 * points to that value in memory. However, when making a copy of that value, the computer will
 * make a new place in memory with that value and the variable will point to this new place in memory
 * This does not work the same for complex data types. Complex data types are stored in memory
 * by refrence point. When you create a complex data type, the variable assigned to it points to 
 * an address in your computers memory. This address then tells your code where in memory to
 * pull the data form. 
 * 
 */

//Number: The dataype of any number value that isnt put in a string
let x = 3 // numbers can be whole numbers
let pie = 3.14 // they can also use decimals
console.log(typeof 1) // prints => number
//String: Used to represent textual data
let string = 'Any text'; // anything wrapped in quotation marks can be a string.
let backticks = `Also a string` // can also use backticks
console.log(typeof "Im a string"); // prints => string
//Boolean: Represetns a logical entity and can have two values: true and false
let coolFactor = true; // A boolean value is either true or false
console.log(typeof true) // prints => boolean
//Array: An object with properties being an indexed list and values being the values put into it
console.log(typeof [1,2,3,4,]) // prints => object(because complex data types are objects)
console.log(Array.isArray([1,2,3,4])) // prints => true (this code test if something is specifically an array)
let arr = [1,null,true,false,'happy',['nested bois',121]]; // Arrays can contain any datatype including other arrays and can be infitintly long.
//Object : A collection of properties or key value pairs
console.log(typeof {a: true, b: false}) // prints => object
let obj = {key1:value,key2:value2} // Objects are collections fo key value pairs. Objects tend to be used to represent something in the real world. 
let iben = {name:'Iben',job:"project team",birthday:08141998} // Can have infite numbers of key value pairs.
//Function : A set of staments that performs a task or calcualtes a value.
console.log(typeof console.log) // prints => function
let namer = function(obj){ // functions can be assigned to variables and can take in parameters
  console.log(obj.name); // The body of a function is the code executed when a function is called.
}
//undefined: a variable that has not been assigned a value 
console.log(typeof undefined) // prints => undefined
let p; // p is equal to undefined. 
//null: represents the intentional absence of any object value
console.log(typeof null) // prints => null
//NaN: a value that is Not a Number
console.log(typeof NaN) // prints => NaN
console.log(41 * 's' * 21) // Occurs when 
//Infinity and -Infinity : A numeric value representing infinity
const maxNumber = Math.pow(10, 1000); // max positive number

if (maxNumber === Infinity) {
  console.log('Let\'s call it Infinity!');
  // expected output: "Let's call it Infinity!"
}

console.log(Math.log(0)       ); /* -Infinity */