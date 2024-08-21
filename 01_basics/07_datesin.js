//link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//Dates 
// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

//timestamps
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now());//values in milliseconds
// console.log(Math.floor(Date.now()/1000));


let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time is`

newDate.toLocaleString('default',{
    weekday:"long"
})








