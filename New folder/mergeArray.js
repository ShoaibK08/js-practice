
let data =[10,20,30]
let data2=[40,50,60]
let data3=[];

for (let i=0;i<data.length;i++){
    data3[i]=data[i];
}

for (let i =0; i<data2.length;i++){

    data3[data.length+i]=data2[i]
}
console.log(data3)