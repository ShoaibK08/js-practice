//Basic filtering:


//Create a function that uses filter() to return an array of positive numbers from the given array:


// const numbers = [-2, 5, 10, -3, 0, 7, -1];

// const positiveNum = numbers.filter(num=>num>0)
// console.log('positive no. are ',positiveNum)




// Filtering strings:
// Write a function that filters an array of strings to only include those with more than 5 characters:
// const words = ["apple", "banana", "cherry", "date", "elderberry"];

// const  MoreThanFive = words.filter(word => word.length>5)
// console.log(MoreThanFive)/




// Filtering objects:
// Given an array of person objects, filter to include only those who are adults (age 18 or older)


// const people = [
//     {name: "Alice", age: 21},
//     {name: "Bob", age: 17},
//     {name: "Charlie", age: 30},
//     {name: "David", age: 15}
//   ];


//   const  above18 = people.filter( p => p.age>18)
//   console.log( above18)





//Filtering with multiple conditions:
//Filter an array of numbers to include only those that are both even and greater than 10:

// const numbers = [5, 12, 18, 7, 11, 24, 3];
// // Your code here
// const NuM = numbers.filter(N=>N%2===0 && N>10)
// console.log( NuM)






// Filtering with external variable:
// Create a function that filters an array of products to include only those within a specified price range:


// const products = [
//     {name: "Shirt", price: 25},
//     {name: "Pants", price: 50},
//     {name: "Shoes", price: 30},
//     {name: "jeans", price: 48},
//     {name: "watch", price: 33},
//     {name: "Hat", price: 15}
//   ];
  
//   function filterByPriceRange(products, minPrice, maxPrice) {
//      let filterProducts=products.filter(p=>p.price>minPrice && p.price<maxPrice )
//      return filterProducts
//   }

//  console.log( filterByPriceRange(products,40,60))