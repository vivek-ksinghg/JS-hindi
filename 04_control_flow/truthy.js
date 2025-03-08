const userEmail=[];

if(userEmail){
    console.log("valid user email");
    
}else{
    console.log("please enter the user email");
    
}

// falsy values
 // " ",false, 0 ,-0, Bigint on ,undefined, NaN

 // truthy value
 // "0", 'false', " ", [], {}, function(){}


 // if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


const obj={};

if(Object.keys(obj).length==0){
    console.log("obj is empty");
    
}



// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // ans is 5
// val1 = null ?? 10 // ans is 10
// val1 = undefined ?? 15 // ans is 15
val1 = null ?? 10 ?? 20 // ans is 10



console.log(val1);

// ternary operator
// (condition) ? truth: false

const age=20;
(age>18) ? console.log("teenager") : console.log("child");
