console.log('hi')

// a='name'
// console.log(a[2])


// let bike=['honda','bmw','kawasaki','Indian']
// let bike_one=bike[1]
// let jk='strings'




// console.log(typeof(bike))

// console.log(bike.length)
// console.log(jk.length)
// bike.push('re')
// console.log(bike)
// bike.unshift('hero')
// console.log(bike)
// bike.pop()
// console.log(bike);
// bike.shift()
// console.log(bike);
// bike[1]='jk'

// console.log(bike);



// var b=10
// var b=10
// {
//     var b=10
//     var b=12
// }
// console.log(b);


// let a=5
// {
//     let a=5
//     let a=5
//     console.log(a);
    
// }
// console.log(a);



let bike=['honda','bmw','kawasaki','Indian']

// let car =['maruti','audi','scorpio']

// let allV = bike.concat(car)
// console.log(allV);
// let sliceB=bike.slice(1,3)
// console.log(sliceB);

// bike.splice(1,0,'kl','lk')
// console.log(bike);

// // console.log(bike.indexOf('Indian'));
// // console.log(bike.lastIndexOf('lk'));

// bike.forEach(bike=>console.log(bike))

// let length=bike.map(bike=>bike.length)
// console.log(length);

// // for(let i =0 ;i<bike.length;i++){
// //     console.log(bike[i])
// // }
// for (let bik of bike){
//     console.log((bik));
    
// }
// let vk=bike.filter(bike=>bike.length>3)
// console.log(vk);

// let jk=bike.reduce((sum,bik)=>sum+bik.length,0)
// console.log(jk);



let matrix=[
    [1,2,3],[4,5,6],[7,8,9]
]

console.log(matrix[1][0]);
console.log(matrix[2][2]);

// (...)spread operators
let arr1=[1,2,3]
let arr2=[...arr1,4,5,6]
console.log(arr2);

// (...)rest operator
function sum(...number){
    return number.reduce((a,b)=>a+b)

}
console.log(sum(1,2,3,4,5,6));
// array destructing

let[f,s,t]=bike
console.log(f);
console.log(s);

//array membership
console.log(bike.includes('bmw'));

//sorting arrays
console.log(bike)
const y =bike.sort()
console.log(y)


let num=[10,20,30,40,50]
let max=Math.max(...num)
let min=Math.min(...num)
console.log(max);
console.log(min);