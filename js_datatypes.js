//primitive datatype(pass by value)

/* 1.String 2.NULL 3.undefined 4.Number 5.Boolean 
    6.Symbol 7.BigInt
*/


let strignName = "arman"
//console.log(typeof strignName);

let NullValue = null;
// console.log(typeof NullValue);

let undefinedData = undefined
// console.log(typeof undefinedData);

let thisISNUmber = 20.00
// console.log(typeof thisISNUmber);

let thisBoolean = true
// console.log(typeof thisBoolean);

const  id = Symbol(123)
// console.log(id===123);
//console.log(typeof id)

//const bigNumber = 63543275636274n

//non - primitive (Pass by reference)

/* 1. 
1. array
2.objects
3.function    
*/

let List = ['rajkot','gondal','porbandar'];
console.log(List);
console.log(typeof List);

//array -> used -- Object

const my = 
{
    name : "armna",
    surname : "Hingora"
}
console.log(typeof my);

const myFuction = function()
{
    console.log("Namaste Dunia");
    
}
console.log(typeof myFuction);

