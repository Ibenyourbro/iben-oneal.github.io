//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    let arr = [];
    for(let key in object){
        arr.push(object[key])
    }
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
let arr = [];
for(const key in object){
    arr.push(key);
}
return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let arr = [];
    for(const key in object){
        if(typeof object[key] === 'string'){
            arr.push(object[key]);
        }
    }
    return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return 'array';
    }else {
        return 'object';
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let split = string.split(' ');
    let cap = []
    for(let i = 0; i < split.length; i++){
        cap.push(split[i][0].toUpperCase() + split[i].slice(1))
    }
    return cap.join(' ');
    

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return `Welcome ${object.name[0].toUpperCase() + object.name.slice(1)}!`;

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

    return `${object.name[0].toUpperCase() + object.name.slice(1)} is a ${object.species[0].toUpperCase() + object.species.slice(1)}`

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if(object.noises === undefined || object.noises.length === 0 ){
        return 'there are no noises'
    }else {
        return object.noises.join(' ');
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    return string.includes(word)
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) { 

    if (object.hasOwnProperty('friends') && Array.isArray(object.friends)) {
        for (let i = 0; i < object.friends.length; i++){
            if(name === object.friends[i]){
             return true; }
            }
         return false;
         }
}

function isFriend(name, object) {
    var obj = object;
    if (obj.hasOwnProperty('friends') && Array.isArray(obj.friends)) {
        for(let i = 0; i < obj.friends.length; i++) {
            if (name === obj.friends[i]) {
                return true;}
            }
        } return false
}


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    let names = [];
    let friends;
    for(let i = 0; i < array.length;i++){
        if(name === array[i].name){
            friends = array[i].friends;
        }
    }
    for(let i = 0; i < array.length; i++){
     if(array[i].name !== name){
        names.push(array[i].name); 
     }
    }
    let names2 = [...names];
    for(let i = 0; i < names.length ; i++){
        for(let x = 0; x < friends.length ; x++){
            if(names[i] == friends[x] ){
                let x = names2.indexOf(names[i]);
                names2.splice(x,1);
            }else if(names[i] === name){
                let x = names2.indexOf(names[i]);
                names2.splice(x,1);
            }
        }
    }
    return names2;
    }
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(obj, key, value) {
    obj[key] = value;
    return obj;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
        for(const key in object){
            for(let i = 0; i < array.length;i++){
                if(key === array[i]){
                    delete object[key];
                }
            }
        }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(arr) {

    let newArray = [...new Set(arr)];
    return newArray;

    // for(let i = 0; i < arr.length;i++){
    //     let count = 1;
    //     while(count < arr.length){
    //         if(arr[i] === arr[count]){
    //             let x = arr.indexOf(arr[i]);
    //             arr.splice(x,1);
    //         }
    //         count++;
    //     }
    // }
    // console.log(arr)
    // return arr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}