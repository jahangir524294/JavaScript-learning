// Array
const myArr = [0, 1, 2, 3, 4]

const myHeros = ["Shaktiman", "Hatim", "Hulk", "IronMan"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);
// Array methods

// myArr.push(7)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(1));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice, splice

// console.log("A", myArr);
const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1,3)
// console.log("c", myArr);
// console.log(myn2);

const marvel_heros = ["thor" , "Ironman", "Spiderman"]
const dc_heroes = ["Batman", "Flash", "Superman"]

// marvel_heros.push(dc_heroes)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1])


// const all_heroes = marvel_heros.concat(dc_heroes)
// console.log(all_heroes);

const all_new_heros = [...marvel_heros, ...dc_heroes]
// console.log(all_new_heros);
// console.log(all_new_heros.length);

const another_array = [1, 2, 3, 4,[5, 6, 7,], 8, [9, 0, 19,]]
const another_real_array = another_array.flat(Infinity)
// console.log(another_real_array);

console.log(Array.isArray("Jahangir"));
console.log(Array.from("Jahangir"));
console.log(Array.from({name: "Jahangir"})) // interesting 

let score1 = 100
let score2 = 345
let score3 = 300

console.log(Array.of(score1, score2, score3));
