function myname(){
    console.log("v");
    console.log("i");
    console.log("v");
    console.log("e")
    console.log("k")
}

// myname();
    
 
function AddTwoNumber(num1,num2){ // num1 and num2 is parameter
  // const ans=num1+num2;
  // return ans;
   return ( num1+num2);
    
}

const sum=AddTwoNumber(3,4); // 3 and 4 is argument
 // console.log(sum);

function isLoggedIn(username ="sam") {
    // sam is default value of username

    if(!username){
        console.log("please enter the username");
        return;
    }

    return `${username} is just logged in`

}

// console.log(isLoggedIn("lol"));
// console.log(isLoggedIn());

function calculateCartPrice(...num1){ // ... is rest operator , it print the all value
    return num1;
}

function calculateCartPrice1(val1,val2, ...num1){ 
    // 1st and 2nd value store in val1 and val2 , and rest of the value store in num 
    // ... is rest operator , it print the all value
    return num1;
}


 // console.log(calculateCartPrice1(500,260,135,256,894));

   const user={
     username:"vivekk",
     price:120
   } 

   function handlePrice(anyObject){
   console.log(`name of user is ${anyObject.username} and price is ${anyObject.price}`);
    
   }

 // console.log(handlePrice(user));

 handlePrice({  // pass the object directly without create extra place
    username:"kushal",
    price:456
 })


    
