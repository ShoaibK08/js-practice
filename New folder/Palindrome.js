function Palindrome (data){
let start = 0;
let end= data.length-1;
let result = true;

while (end>start){
     if(data[start]!==data[end]){
        return result = false;
     }
    start++;
    end--;
}
return result

}


var str = "level"
  console.log(Palindrome(str))