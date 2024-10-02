function removeDuplicates(arr) {
    // Create an empty array to store unique values
    var uniqueArray = [];
  
    // Loop through the original array
    for (var i = 0; i < arr.length; i++) {
      // Check if the current element is not already in uniqueArray
      if (uniqueArray.indexOf(arr[i]) === -1) {
        // If it's not in uniqueArray, add it to uniqueArray
        uniqueArray.push(arr[i]);
      }
    }
  
    // Return the array with duplicates removed
    return uniqueArray;
  }
  
  // Example usage:
  var originalArray = [1, 2, 2, 3, 4, 4, 5];
  var deduplicatedArray = removeDuplicates(originalArray);
  console.log(deduplicatedArray); // Output: [1, 2, 3, 4, 5]
  