/**FUNCTIONS
 * 0. There are two phases to using a function. First is the creation phase, this phase is where hoisting takes place.
 * Hoisting allows functions to be used in code before they are declared (only with function declarations). The next phase
 * is the execution phase. This is where the code in the body of the function is used with the arguments placed in the function call.
 * 1.A functions paramters are temprary values placed in the function declaration used to represent the diffrenct arguements passed
 * into a function during the functions execution. Parameters can be named anything and can be used in any way you like in the body of
 * the function. Just make sure you understand what type of value each parammeter will eventually be once the function is called. I.e you do not want
 * to use array methods on a parameter that becomes a number once its passed as a argument. An argument is what takes the place of your 
 * parameters once the function is actually called.
 * 2.Scope is an important concept when it comes to functions. Functions can see and modify variables in its parent scope(s) or the global scope.
 * The opposite is not true. A variable declared in a function is only accesible in that function or in its child scopes.
 * 3. Closure is the idea that functions will always have access to the variables in its 'birthplace' this means that if a function returns another
 * function, once the first function is executed, the data of all the variables created in the first function still exist with the the function it returned
 * So once we call the function that has been returned, it will work properly if it needed access to any of the values in its parents scoep.
 *
 */

//Creating a named function:
function named(name){
    console.log(`Hello ${name}`);
};

//Assigning a function to a variable
const greeter = function(name){
    console.log(`Wie Gehts ${name}`);
};

// Function to not have to have paramters
const noParams = function(){
    console.log(`no paramters needed`); // Used when a function doesn't need to take in any data and can work on its own
}

//Scope examples
let x = 20;
const add20 = function(num){
    let ham = 'ham';
    return num + x; // this function has access to x because x is in the global scope 
};

console.log(ham); // this gives us an undefined error because the global scope does not have acess to variables created in a function


//Closure Examples

const randomFunc = function(){
    const name = 'Iben';
    function sayHello(){
        console.log(`Hello ${name}`);
    }
    return sayHello;
}

let sayHelloToIben = randomFunc(); // Sets sayHelloToIben to the sayHello function returned in randomFunc
sayHelloToIben(); // This calls the function and logs hello to Iben. This means the function still has access to the variables created in its parent scope aka closure