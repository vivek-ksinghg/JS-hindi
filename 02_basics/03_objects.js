// Singalton

// objects literals
const mySym=Symbol("key1");


const obj={
    name:"vivek",
    "full name": "Alok kumar singh chutiya",
    [mySym]:"mykey",
    age:18,
    location:"indore",
    email:"vivek@amzone",
    isLoggedIn:false,

}

// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj["full name"]);

// obj.email = "hitesh@chatgpt.com"
// console.log(obj.email);
// Object.freeze(obj);
// obj.email = "hitesh@cha.com"
// console.log(obj.email);

obj.greeting=function(){
    console.log("hello js user");
}

obj.greeting2=function(){
    console.log(`hello js user ${this.email}`);
}

console.log(obj.greeting());
console.log(obj.greeting2());
