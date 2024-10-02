// The reduce() method in JavaScript is used to reduce an array to a single value. It executes a provided function for each element of the array, accumulating the result into a single output value.
// Key points about reduce():

// It takes a callback function as its first argument.
// The callback function takes at least two parameters: an accumulator and the current value.
// Optionally, you can provide an initial value for the accumulator.
// The callback function's return value becomes the new accumulator value for the next iteration.



// Sum of Numbers:
// Calculate the sum of all numbers in the array:

// const numbers = [1, 2, 3, 4, 5];
// // Your code here

// const sum = numbers.reduce((acc,cur)=>acc+cur,0)
// console.log(sum)


// Longest Word:
// Find the longest word in an array of strings:

// const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// const longestWord = words.reduce((acc, currentWord) => {
//   if(acc.length<currentWord.length) {

//   return currentWord
// }
// else{
//     return acc
// }
//   }, ''); 
  
//   console.log(longestWord);


//   //by ternary operator
//   const longestWord1 = words.reduce((acc,currentWord)=>acc.length<currentWord.length? currentWord:acc,'')
//   console.log(longestWord1);


// Flatten an Array: Use reduce to flatten an array of arrays into a single array:
const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = nestedArray.reduce((acc, currentArray) => {
// return [...acc,...currentArray]
return acc.concat(currentArray)
}, []); 

console.log(flattenedArray);