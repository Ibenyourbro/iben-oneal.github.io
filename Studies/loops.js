/**LOOPS
 * 0.Loops offer a quick and easy way to to something repreatdely.
 * 1.There are many diffrent kinds of loops, but they all do esseinetly the same thing:
 * repeat an action some number of times. 
 * 2. For loops repeat until a specfied condition evaluates to false.
 * 3.A while statment executes its statements as long as a specfied condtion evalutes to true.
 * 4. The for .. in statment iterates a specified variable over all the enumerable properties
 * of an object.
 */

// for loop
let x = 99;
for(let i = 0; i < x; i ++){
    console.log(i); // prints => 1 - 99 looping until i >= 99;
};

let arr = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]); // prints each value in the array from index 0 to end of array
}

for(let i = arr.length - 1; i >= 0; i++){
    console.log(arr[i]); // Loops through the array backwards.
}


// while
let w = 1;
while (w < 99){
    console.log(w); // prints => 1 - 99, where the end point is when w is >= 99;
    w++;
}


// for...in
let obj = {name:"joe"};
for(let key in obj){
    console.log(obj[key]); // Loops through object and logs each value. prints => joe
}