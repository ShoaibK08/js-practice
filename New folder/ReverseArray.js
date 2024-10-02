
// method1
// const Arr=[1,2,3,4,5,6]
//  const Reverse= Arr.reverse()
//  console.log(Reverse)

// method2
// const Arr=[1,2,3,4,5,6]
//  const Reverse = [];
// for(let i=Arr.length-1;i>=0;i--){
//     Reverse.push(Arr[i])
// }
//  console.log(Reverse)


// method3
// const Arr=[1,2,3,4,5,6]
// let temp ;
// function customReverse(Arr, start, end){
//     console.log( Arr
//         )
//     if ( start <= end){  
//         temp= Arr[start];
//        Arr[start]=Arr[end];
//          Arr[end]=temp;
//          customReverse(Arr, start+1, end-1)
//   }
//   else {
//       console.log("hi")
//   }
// }
  
      


// customReverse(Arr, 0, Arr.length-1)


//  the best way to solve
const Arr = [1, 2, 3, 4, 5, 6];
let temp;

function customReverse(Arr, start, end) {
    console.log(Arr)
    if (start < end) {
        temp = Arr[start];
        Arr[start] = Arr[end];
        Arr[end] = temp;
        customReverse(Arr, start + 1, end - 1);
    }
}

console.log("Original Array:", Arr);
customReverse(Arr, 0, Arr.length - 1);
console.log("Reversed Array:", Arr);




