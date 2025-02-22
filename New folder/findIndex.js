

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
 


let nums =[5,7,7,8,8,10]
let number =[];


function findIndex (num,target){
  
    const result =[];
    if (nums.length === 0 && target === 0) {
        return [-1, -1];
    }
   
    
    for (let i=0; i<num.length; i++){
        if(num[i]===target){
            result.push(i)
        }

       }
       if (result.length===0){
        return[-1,-1]
      }
       return result;
}

// console.log(findIndex(nums, 1))

// console.log(findIndex(number , 0))

console.log(findIndex(nums, 7))