// const promiseOne=new Promise(function(resolve,reject){

//        //Do an async task
//     // DB calls, cryptography, network 

//     setTimeout(()=>{
//         console.log("async task 1");
//         resolve();
        
//     },2000)

// })

// promiseOne.then(function(){
//     console.log("async 1 resolved");
    
// })

// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log(
//             "async task 2"
//         );
//         resolve();
        
//     },1000)
// }).then(function(){
//     console.log("async 2 resolved");
    
// })


// const promisThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({userName:"alok", EmailId:"alok458@gmail.com"})
//     },1000)
// })

// promisThree.then(function(user){
//     console.log(user);
    
// })

// ************** promise with then and catch  **************

const promiseFour=new Promise(function(resolve,reject){
      
    setTimeout(function(){
        let error=true;
        if(error){
        resolve ({username:"ankush", EmailId:"ankush@123"})
       }else{
        reject('ERROR: something went wrong')
       }
    },3000)
})


promiseFour.then((user)=>{
    console.log(user);
    return user.username;
    
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log("promise is either resolved or reject");
    
})


// ********************* PROMISE with ASYNC/Await keyword ********************
const promoseFive=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true;
        if(error){
        resolve ({username:"java script", EmailId:"hitesh"})
       }else{
        reject('ERROR: something js wrong')
       }
    },1000)
})

async function consumepromoseFive(){
    try{
        const consume= await promoseFive;
        console.log(consume);
        
    }catch(error){
            console.log(error);
            
    }
}

consumepromoseFive();


//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.



