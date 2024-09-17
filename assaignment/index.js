

//1. Write a function named calculateDifference that takes two arguments
// and returns the difference between the first and second argument.
const a = 8;
const b = 5;
const calculateDifference = a-b;
console.log(calculateDifference)



// 2.Write a function named isOdd that takes one argument and returns true
//  if the number is odd, and false if it is not. j


const num = 11;

function isOdd(num) {
    let reminder = (num % 2)
    if (reminder == 0){
        console.log(`False` )
    }else{
        console.log(` True` )
    }
}

isOdd(num)


// 3.Write a function named findMin that takes an array of 
// numbers and returns the smallest number in the array.

let numbers = [5,15,24,34,1,8,15]
const findMin = Math.min(...numbers)

console.log(findMin)





 // 4.Write a function named filterEvenNumbers that takes an array of 
// numbers and returns a new array containing only the even numbers.



let numberss = [86, 41, 55, 85, 90, 24];

let evenNumbers = numberss.filter(function(element) {
      return element % 2 === 0;
});

console.log(`Even numbers in an array are: ${evenNumbers}`);


// 5) Write a function named sortArrayDescending that takes an array of 
// numbers and returns a new array sorted in descending order.

const points = [40, 100, 1, 5, 25, 10];

const sortArrayDescending = points.sort(function(a, b){return b-a});

console.log(sortArrayDescending)


// 6) Write a function named lowercaseFirstLetter that takes a string 
// and returns the same string with the first letter lowercased.

const  anotherGreeting = 'GOOD MORNING!!';

console.log(anotherGreeting.toLowerCase());

// 7) Write a function named countVowels that takes a string and returns the number of vowels 
// (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string


function countVowels(str) {
    
    const vowelMatches = str.match(/[aeiouAEIOU]/g);

    
    return vowelMatches ? vowelMatches.length : 0;
}


const inputString = 'Saifuddin Al Mahmud';
const result = countVowels(inputString);

console.log(`Number of vowels in (${inputString}) : ${result}`)

// another way 

function countVowels(str) {
    
    const vowels = "aeiouAEIOU";
    
   
    return [...str].filter(char => vowels.includes(char)).length;
}


const string = "Saifuddin Al Mahmud";
console.log(countVowels(string)); 



// 8) Write a function named findAverage that takes an array of 
// numbers and returns the average of all elements.




let array = [10, 22, 16, 24];
let sum = array.reduce((acc, curr) => acc + curr, 0);
let average = sum / array.length;
console.log("Average: "+average);


