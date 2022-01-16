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
console.log(typeof 1) // prints => number
//String: Used to represent textual data
console.log(typeof "Im a string"); // prints => string
//Boolean: Represetns a logical entity and can have two values: true and false
console.log(typeof true) // prints => boolean
//Array: An object with properties being an indexed list and values being the values put into it
console.log(typeof [1,2,3,4,]) // prints => object(because complex data types are objects)
console.log(Array.isArray([1,2,3,4])) // prints => true (this code test if something is specifically an array)
//Object : A collection of properties or key value pairs
console.log(typeof {a: true, b: false}) // prints => object
//Function : A set of staments that performs a task or calcualtes a value.
console.log(typeof console.log) // prints => function
//undefined: a variable that has not been assigned a value 
console.log(typeof undefined) // prints => undefined
//null: represents the intentional absence of any object value
console.log(typeof null) // prints => null
//NaN: a value that is Not a Number
console.log(typeof NaN) // prints => NaN
//Infinity and -Infinity : A numeric value representing infinity
const maxNumber = Math.pow(10, 1000); // max positive number

if (maxNumber === Infinity) {
  console.log('Let\'s call it Infinity!');
  // expected output: "Let's call it Infinity!"
}

console.log(Math.log(0)       ); /* -Infinity */