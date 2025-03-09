// const coding=["js","java","c++","python","ruby"];

// const values=coding.forEach((item)=>{
//      console.log(item);    // note: for each do not return any value 
//     //  return item;
    
// })

// console.log(values);

const myNum=[1,2,3,4,5,6,7,8,9,10];

// const  nums=myNum.filter((num) => num>4)
// console.log(nums); // nums:[5,6,7,8,9,10]

// const nums=myNum.filter((num) =>{
//         return num>4; // note: where we shall use {} this bracket so return keyword is neccessary
// })

// console.log(nums); // nums=[ 5, 6, 7, 8, 9, 10 ]

const myAns=[];

// myNum.forEach((num)=>{
//     if(num>6){
//         myAns.push(num);
//     }

   
// })

// console.log(myAns); // myAns=[ 7, 8, 9, 10 ]



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let info=books.filter((num)=>num.genre==='Non-Fiction' )

// console.log(info);


 info=books.filter((num)=>{
   return num.publish>=1995 && num.genre==="History"
        
 })
    console.log(info);
    
//   books.forEach((bk)=>{
//     if(bk.edition>2000){
      
//        console.log("inside :"+ bk.edition);
//     }


//   })
