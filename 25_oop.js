const myObj = {
    username :"arman hingora",
    id : 1,
    email : "armanhingora2005@gmail.com",
 
    getuser : function()
    {
        // console.log('This is my function');
        // console.log(this.username);   
    }
}

// console.log(myObj.username);
// console.log(myObj.getuser());

//constructor function

const User = function(username,id,email){
    this.username = username;
    this.id = id;
    this.email = email;

    return this
}

const userOne = new User("Arman",12,'vjd@example.com')///new keyword ke base pe constructor call hota hai
const userTwo = new User("Afrid",10,'example@gmail.com')
console.log(userOne);
console.log(userTwo);

console.log(userOne instanceof User);

// new keyword apne liye ek new copy banayega take value/data overright na ho paye
