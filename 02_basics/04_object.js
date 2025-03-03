
// const tinderUser=new Object();
const tinderUser={};

tinderUser.name="ankit";
tinderUser.id="123abc";
tinderUser.isLoggedIn=false;

 // console.log(tinderUser); // [name:ankit, id:123abc, isLoggedIn:false]

 const regularUser={
    email:"vivek@singh",
    username:{
        fullname:{
            firstName:"janny",
            lastname:"doe"
        }
    }
 }

 // console.log(regularUser.username.fullname);

 const obj1={1:"a",2:"b"};
 const obj2={3:"d",4:"k"};

 // const obj3={obj1,obj2};  its output
  //  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


// const obj3=Object.assign(obj1,obj2);
  //{ '1': 'a', '2': 'b', '3': 'd', '4': 'k' }

  const obj3={...obj1,...obj2};
//  console.log(obj3);

 //{ '1': 'a', '2': 'b', '3': 'd', '4': 'k' }


 const users =[
    {
        id:123,
        name:"sonu"
    },
    {
        id:120,
        name:"nigam"
    },
    {
        id:789,
        name:"sandeep"
    }
 ]

// console.log(users[2].id); // 789

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


// object de-structure
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

