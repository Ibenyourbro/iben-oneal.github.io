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
// 