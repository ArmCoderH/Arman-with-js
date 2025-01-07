const myName = [1,2,3]

// const total = myName.reduce(function hello(acc,myName)
// {
//     return acc + myName
// },0)

//console.log(total);


const total = myName.reduce( (acc,myName)=>acc+myName,0)

//console.log(total);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

for (const id of shoppingCart) {
    console.log(id);
    
}

const item = shoppingCart.filter((num)=>{return num.itemName})
// console.log(item);

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);
