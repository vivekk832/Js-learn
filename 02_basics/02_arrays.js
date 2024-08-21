const circket = ["virat kohli","rohit sharma","shikher dhawan"]
const rcb= ["ab divilers","chris gayle","glen maxwel"]

// circket.push(rcb) // it returns same array with a push element
// console.log(circket)// it takes any types of entry data
// console.log(circket[3][1])

// let combine =circket.concat(rcb) // it actually returns the new array with concat results 
// console.log(combine);

const  all_players  =[...circket,...rcb]
console.log(all_players);


const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_arr.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Vivek"))
console.log(Array.from({name:"Vivek"}));   //intresting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
