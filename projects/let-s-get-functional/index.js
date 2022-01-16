// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./iben-oneal.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let output = 0;
    _.filter(array,function(customer){
        if(customer.gender === 'male'){
            output++;
        }
    })
    return output;
};

var femaleCount = function(array){
    var numFemales = _.reduce(array,function(females,customer,index){
        if(customer.gender === 'female'){
            females += 1;
        }
        return females;
    },0)
    return numFemales;
};

var oldestCustomer = function(array){
    let age = [['',0]];
    for(let i = 0; i < array.length;i++){
        let customer = array[i];
        if(customer.age > age[age.length-1][1]){
            age.push([customer.name,customer.age])
        }
    }
    return age[age.length-1][0];
};

var youngestCustomer = function(array){
        let age = [['',Infinity]];
        for(let i = 0; i < array.length;i++){
            let customer = array[i];
            if(customer.age < age[age.length-1][1]){
                age.push([customer.name,customer.age])
            }
        }
        return age[age.length-1][0];
};

var averageBalance = function(array){
 let bal = array.reduce(function(accum,cur){
    let cleanBal = Number(cur.balance.replace(/[,$]/g, ''));
    return accum += cleanBal;
 },0)

return bal / array.length;
};



var firstLetterCount = function(array,letter){
    let counter = 0;
    for(let i = 0; i < array.length;i++){
        if(array[i].name[0].toLowerCase() === letter.toLowerCase()){
            counter++;
        }
    }
    return counter;
};

var friendFirstLetterCount = function(array,customer,letter){
    let counter = 0;
    for(let i =0; i < array.length; i++){
        if(array[i].name === customer){
            for(let x = 0; x < array[i].friends.length;x++){
                if(array[i].friends[x].name[0].toLowerCase() === letter.toLowerCase()){
                    counter++;
                }
            }
        }
    }
    return counter;
};

var friendsCount = function(array,name){
    let output = [];
    for(let i = 0; i < array.length;i++){
        for(let x = 0; x < array[i].friends.length;x++){
            if(array[i].friends[x].name.includes(name)){
                output.push(array[i].name)
            }
        }
    }
    return output;
};



var topThreeTags = function(array){
    let tags = {};
   for(let i = 0; i<array.length;i++){
       let userTags = array[i].tags;
       for(let x = 0; x < userTags.length; x++){
           if(tags[userTags[x]]){
               tags[userTags[x]] += 1;
           }else {
               tags[userTags[x]] = 1;
           }
       }
   }

   let arr = Object.entries(tags).sort(function(a,b){
       return b[1] - a[1];
   });

   return [arr[0][0],arr[1][0],arr[2][0]];

// [[em,4],[zz,5]]
//    tags.flat();
//    var map = tags.reduce(function(obj, b) {
//     obj[b] = ++obj[b] || 1;
//     return obj;
//   }, {});

};




var genderCount = function(array){
    let output = {};
    var numFemales = _.reduce(array,function(females,customer,index){
        if(customer.gender === 'female'){
            females += 1;
        }
        return females;
    },0);
    var numMales = _.reduce(array,function(males,customer,index){
        if(customer.gender === 'male'){
            males += 1;
        }
        return males;
    },0);
    var numNonBinary = _.reduce(array,function(nonbinary,customer,index){
        if(customer.gender === 'non-binary'){
            nonbinary += 1;
        }
        return nonbinary;
    },0);

    output.male = numMales;
    output.female = numFemales;
    output['non-binary'] = numNonBinary;
    return output;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
