const user={
    usename:"vivek",
    id:124,
   
    welcomeuser:function(){
        console.log(`username is ${this.usename} and id is ${this.id}`);
    }
      
}
// user.usename="ansul";
// console.log(user.usename); // vivek
// user.welcomeuser()

// console.log(this);

// function chai(){
//      let username="vivek" // result is undefined
//     username="modi" // (doubt) but here result is modi why 
//     console.log(this.username);
//      console.log(this);
    
// }

// chai();

// const chai=function(){
//     let username="myName";
//     console.log(this.username);
    
// }

// chai();


// const chai= ()=>{
//       let   username="myName"; // in arrow fuction datatype defined or not but answer is undefined
//       //console.log(this.username);
//       console.log(this);
      
        
//     }
    
//     chai();

   let arrowFunction= (num1,num2)=>{
         console.log(num1+num2);
    }

    arrowFunction(4,2);

    let arrowFunction1= (num1,num2)=>{
        console.log(num1+num2);
   }

   arrowFunction(4,2);





  


