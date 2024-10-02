let Str= "ShoaibKhan"
let StrObj={};
let maxkey='';
for (let i=0;i<Str.length;i++){

    // console.log(Str[i]);
    let key =Str[i];
    if(!StrObj[key]){
        StrObj[key]=0;
    }
   StrObj[key]++;
   console.log(Str[key]);
if(maxkey==''|| StrObj[key]>StrObj[maxkey]  ){
    maxkey=key;
}
}

console.log( StrObj)
console.log(maxkey)