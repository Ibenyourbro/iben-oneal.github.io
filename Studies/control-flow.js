/**CONTROL FLOW
 * 0. Control flow is the order in which the computer executes statments in a script.
 * 1. Code is run in order from the first line in the file to the last line, unless the 
 * computers runs across structures that change the control flow, typically condtionals and loops.
 * 2. Most common condtional structure is the if .. else. This structure checks if something is
 * true, if it is does everything in the if block. If it is not, does everything in the else block.
 * 3. Sometimes you want to chain further than 1 true statment, for this you use if...else if or switch structures.
 * They both go through a list of condtionals and executes the code when it finds one that is true.
 * 
 */

// if
let x = 1;
if (x === 1){
    console.log('True') // This code will execute because x === 1. The if block just checks if the condtion in the ( ) is true and executes all code in its block
}

// else 

if(x === 2){
    console.log('True')
}else{
    console.log('false'); // This code works because one the program realises the conditional is flase, it executes whatever is in the else block.
}

// else if

if (x === 2){
    console.log('true')
}else if (x === 1){
    console.log('true');//This code checks for 2 condtionals and could theoritacally be chained infintely. 
}else{
    console.log('false');
}

// switch : Useful for comparing large amounts of condtionals where only 1 thing is changing. Basically saying
// if x is 0 do this, if its 1 do this, if it's 2,3,4,5 do this.

switch(x){
    case 0:
        console.log('to low');
        break;
    case 1:
        console.log('just right');
        break;
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('to high'); 
        break; // You can have one result for multiple cases by not adding a break until you are at the final case that expects the same result.
}