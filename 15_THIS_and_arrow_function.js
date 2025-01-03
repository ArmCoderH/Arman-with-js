const user = {
    username : "hitesh",
    price : 999,

    welcomemsg : function()
    {
        console.log(`${this.price} , welcome to website`);
        console.log(`${this.username} , welcome to website`);
    }
}



user.welcomemsg()
user.username = "arman"
user.welcomemsg()

console.log(this);


function chai()
{
    console.log(this);
    
}

chai()



