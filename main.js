// setting age
const myAge = 27;

// first 2 years of dog life 
let earlyYears = 2;

earlyYears *= 10.5;

// Already factoring in first 2 years
var laterYears = myAge - 2;

// taking remaining years times 4
laterYears *= 4;

// first two years * 10.5 plus remaing years * 4
let myAgeInDogYears = earlyYears + laterYears;

// lowercase lettering no matter what is typed
let myName = "Joey Graham".toLowerCase();

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years`)
