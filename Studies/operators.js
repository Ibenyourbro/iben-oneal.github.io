/**OPERATORS
 * 1. Assignment operators assigns a value to its left based on the value of its right. The most
 * basic assigment operator is '='. Assigment operators also can be used to do basic arthematic 
 * and then assign the value equal to the result of the arethmatic i.e. *= , += , /= .
 * 2. Comparasion Operators compares its operands and returns a logical value based on if the
 * comparsion is true. '=='  checks if something is equal. '!=' checks if it is not equal etc.
 * 3. Arithmetic Operators takes numerical values as their operands and returns a single numerical 
 * value. '++' returns the your orignal value + 1. '%' retunrs the remainder of dividing the two
 * operands.
 * 4.Logical Operators are typically used with Boolean values; when they are, they return
 * a boolean value. Useful for discovering if two things are true or false.  For example, 
 * '||' checks if either condition to tis right or left is true. If one is, it returns true.\
 * 5. Unary Operators are operatiosn with only one operand. 'delete' takes in one thing and 
 * deletes it. 'typeof' takes in one operand and finds it's type.
 * 6. Ternary Operator sometiems called the conditional operator is the only operator that 
 * takes three operands. A condtion, followed by a question mark (?), then an expression to
 * excute if the condition is truthy, followed by a colon (:), and finally the expression to 
 * execute if the condtion is falsy. This allows the operator to be used as an alternative to 
 * and if else statment.
 */

//Assignment Operators
let x = 12; // The '=' is an assigment operator.
x *= 4; // '*=' multiplies x by 4 and sets x equal to the value of that operation. x = 48;
x /= 2; // x = 24
//Comparision Operators
if(x == 12){
    console.log('Math not added up');
}else if(x != 44){
    console.log('Well its not 44');
    continue;
}else if (x > 20){
    console.log('And its above 20');
    continue;
}else if(x < 25){
    console.log('Well it has to be between 20 and 25.')
}
//Arithmetic Operators
if (x % 2 === 0){ // % is an arithmetic Operator that checks what the remainder is after dividng two numbers
    console.log('Well its an even number ');
}
console.log(x * 2) // This multiples the value of x by 2.
//Logical Operators
if(x < 25 && x > 23){ // Checks if x is less than 25 AND greater than 23;
    console.log('It has to be 24')
}
// Unary Operators
if(typeof x === 'number'){ // typeof accepts 1 operand.
    console.log('Glad we didnt mess that up!')
}

if(!true){ // the ! operator changes a truthy value to a falsey value and vice versa
    console.log('This is false');
}
//Ternary Operator
x === 24 ? console.log('I knew it') : console.log('This is all jammed up'); // prints => 'I kenw it'