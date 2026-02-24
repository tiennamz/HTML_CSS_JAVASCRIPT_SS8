// let sum =(a,b) =>{
//     return a+b;
// }
let handleSum = (handleTotal) =>{
    console.log(handleTotal(1,2));
}
handleSum(sum =(a,b) =>{
    return a+b});

// forEach();
let listNumber=[10,20,30,100,-20];
// for(let i=0;i<listNumber.length;i++){
//     console.log(listNumber[i]);
// }

listNumber.forEach((el,index) => {
    console.log(`${index}-${el}`);
    
})

// map: tạo ra mảng mới  
let newArray= listNumber.map((el,index) =>{
    return el*=2;
})
console.log(newArray);

// filter
let fiterArray= listNumber.filter((el,index)=>{
    return index%2===0;  
})
console.log(fiterArray);

// reduce
let newListNumber =[1,2,3,4]

let sumListNumber=newListNumber.reduce((acc, cur, index,array)=>{
    return acc+=cur
},0)
console.log(sumListNumber);

