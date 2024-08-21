// #Primitive(call by Value )
// 7 typees: String , Number , Boolean, Null , undefined , Symbol , BigInt


const score = 100
const scoreValue = 100.3
const isLoggedIn = false 
const outsideTemp = null   //console.log(typeof outsideTemp);  o/p: object 

let userEmail;

const id= Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// const bigNumber = 546515121457894512124 // n makes is bigInt

//Non-primitive (call by reference)
//Array , Objects , Functions

const heros =["shaktiman ","naagraj","doga"] //ex array
let obj={
    name : "Vivek",  
    age : 22,
}                               //objects =>{ this is object }

//Assigning a function to a variable 
const myFunction = function(){
    console.log("Hello Dunia ");
    
}

console.log(typeof myFunction ); //function
console.log(typeof obj);// object 
console.log(typeof heros);// object 

//http://262.ecma-international.org/5.1/#sec-11.4.3


/*******************************************************************************************************/

//Stack (Primitive), Heap(Non-Primitive)

let myYoutubeName = "vivekkale"

let anotherName = myYoutubeName
anotherName = "ChaiAurCode"
console.log(myYoutubeName);//vivekkale
console.log(anotherName);//ChaiAurCode


let userOne={
    email:"vivekkale018@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

console.log(userOne === userTwo);//true
userTwo.email = "vivek@gmail.com"

console.log(userOne.email);//vivek@gmail.com
console.log(userTwo.email);//vivek@gmail.com






