/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals,name){
    for(let i = 0; i < animals.length; i++){
        if(name === animals[i].name){
            return animals[i];
        }
        
    }
    return null;
}

// function search(animals, name) {
//     for (let i = 0; i < animals.length; i++) {
//         if (name === animals[i].name) {
//             return animals[i];
//         }
//     } return null;
// }

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(arr,name,replacement){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name === name){
            arr[i] = replacement;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(arr,name){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name === name){
            arr.splice(i);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(arr,newAnimal){
    let check = 0;
    for(let i =0; i< arr.length;i++){
        if(arr[i].name === newAnimal.name){
            check++;
        }
    }
    if(newAnimal.name.length > 0 && newAnimal.species.length > 0 && check === 0){
        arr.push(newAnimal);
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
