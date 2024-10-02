function CheckAnagram(str1, str2) {
  let obj = {};
  if (!str1.length === str2.length) {
    return false;
  }
  for (ch of str1) {
    obj[ch] = (obj[ch] || 0) + 1;
   
  }
//   console.log(obj);

  for (ch of str2) {
    if (!obj[ch]) {
      return false;
    }

    obj[ch]--;
  }

//   console.log(obj);
  return true;
}

console.log(CheckAnagram("cat", "act"));




