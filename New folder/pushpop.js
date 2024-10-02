 let data = [];
 let currentSize = data.length;

 function push (newVal){
    data[currentSize]=newVal;
    currentSize=+1;
 }


 function pop (newVal)
 {
   const currentSize = data.length;
   data.length = currentSize - 1;

 }

 push(10);
 push(20);
 console.log(data)
 pop()
 console.log(data)

