//this keyword is only used in object not used in function


const user = {
    username : "hitesh",
    price : 999,

    welcomemsg : function()
    {
        // console.log(`${this.price} , welcome to website`);
        // console.log(`${this.username} , welcome to website`);
    }
}



// user.welcomemsg()
// user.username = "arman"
//user.welcomemsg()

//console.log(this);


function chai()
{
    //console.log(this);
    
}

chai()

if (true) {

    const id = 321;
    if(true)
    {
        // console.log(id);
        
    }
    // console.log(id);
}
//console.log(id);



//arrow function are used :->

//orignal function syntex 



// const hello1 = function ()
// {
//     let username = "arman";
//     console.log(this);  
// }

// hello1()


// const hello = () => 
// {
//     let username = "arman";
//     console.log(this);  
// }

// hello()


//explicit return
const addTwo = (num1,num2) => {
 return num1 + num2
}

console.log(addTwo(3,5))


//implicit return 
const divedTwo = (num1,num2) => num1 / num2

console.log(divedTwo(15,5))

