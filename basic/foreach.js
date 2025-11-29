// const coding =["js","ruby","java","cpp"]
// coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// const num = [1,2,3,4,5,6,7,8,9]
// const newnum = num.filter((mynum) => {
//       return mynum>4
// })

// const newnum= []
// num.forEach((mynum)=>{
//     if (mynum>4) {
//         newnum.push(mynum)
//     }
// })
// console.log(newnum)



//-----Chaining-----
// const num = [1,2,3,4,5,6,7,8,9]
// const mynum= num.map((num) => num + 10)

// const mynum = num 
//             .map( (num) => num * 10)
//             .map( (num) => num + 1)
//             .filter( (num) => num >= 40)
// console.log(mynum);


//Reduce

const num = [1,2,3]

const total = num.reduce( (accumulator, currentValue) => {
    // console.log(`Accumulator : ${accumulator} and current value: ${currentValue}`);
    
    return accumulator + currentValue
}, 0)
// console.log(total);


const shoppingCart = [
    { 
        itemName: "js course",
        price: 3000
    },
    { 
        itemName: "python course",
        price: 3999
    },
    { 
        itemName: "java course",
        price: 5000
    },
    { 
        itemName: "cpp course",
        price: 2000
    },
]
const payment = shoppingCart.reduce( (acc, item) => acc + item.price,0)
console.log(payment);
