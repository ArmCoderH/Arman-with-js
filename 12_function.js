/*function sayHello()
{
    console.log("A");
    console.log("B");
    console.log("C");
    console.log("D");
    console.log("E"); 
} 
sayHello()

*/

/*

function TwoSum(x,y)
{
    const sumIs = x + y;
    return sumIs;
    console.log("sum is=",sum);
}
TwoSum(3,4)



const sumIs = TwoSum(40,50)
console.log(sumIs);

*/


/*

function loginUserName(username="hingora"){
    if(username === undefined)
    {
        console.log("plese enter username");
        return
    }
    return `my name is ${username} `

}
console.log(loginUserName("arman"));

*/

//when some time you can addtocart mathod apply on shoopping website
//then

/*function AddToCart(...num1)
{
    return num1
}

console.log(AddToCart(100,200,300,400,500)) //multiple parameters in one array


function AddToCart2(value1,value2,value3, ...num1)
{
    return num1
}

*/

//console.log(AddToCart2(100,200,300,400,500)); //LIKE num1 print only 400,500 value becuase 100,200,300 value are fatch by value1,2,3

/*const user = {
    username : "Arman",
    price  : 400
}

function handleObjects(anyObject){
    console.log(`my name is ${anyObject.username} && price is = ${anyObject.price}`);
}

handleObjects(user)//first mathod is....

handleObjects({    //second method is....
    username : "Raj",
    price : 600
})

*/

const myNewArray = [200,333,5000,6000]

function SecondIndexReturn(getINdex){
    return getINdex[2]
}

console.log(SecondIndexReturn(myNewArray));


