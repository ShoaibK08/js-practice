let Arr = [12, 33, 1, 5, 53, 25, 67, 574, 85, 9, 18];

console.log(Arr);
for (let i = 0; i < Arr.length; i++) {
  for (let j = 0; j < Arr.length; j++) {
    if (Arr[j] > Arr[j + 1]) {
      let temp;
      temp = Arr[j];
      Arr[j] = Arr[j + 1];
      Arr[j + 1] = temp;
    }
  }
}

console.log(Arr);
