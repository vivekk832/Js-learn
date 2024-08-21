//Arrays
const myArr = [0,1,2,3,4,5,6,7,8]
//link:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
3
// console.log(myArr[0]);
const myHeros = ["virat Kohli","rohit sharma"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[0]);

//Array methods
// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)//add value at start 
// myarr.shift() // removes the start element 
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf());

// console.log(myArr);


const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof myArr);//object

// console.log(newArr);
// console.log(typeof newArr);// string


// slice ,splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3)

// console.log(myn1);
console.log("B",myArr);


//splice
const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);













