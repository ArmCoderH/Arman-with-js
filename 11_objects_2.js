//const object1 = new Object();
const object1 = {}
Object.freeze(object1);
object1.email = "arman@gmail.com"
console.log(object1.email);
Object.freeze(object1);


const object2 = {
    email : "armanhingora2005@gmail.com",
    //nested object
    fullName : {
        userName : {
            FirstName : "ARman",
            LastName : "Hingora"
        }
    } 
} 

console.log(object2.fullName.userName.FirstName);


//merge two objects

const name = {1: "raj", 2:"prathna"}
const age = {3: 18, 4: 19}

//first
console.log(name,age);

//second using assign()
const NameAge = Object.assign({},name,age) //target and value

//third Spred "..." 
const object3 = {...name,...age};
console.log(object3);

// in database widely used this method 
//Objects in Arrays

const users = [
    {
        id: 1,
        name : "arman"
    },
    {
        id: 2,
        name : "raj"
    },
    {
        id: 3,
        name : "husu"
    }
]


///


[

    {},
    {},
    {}
]
//using JSON
//java Script objects notetion

/* for give free api than search into 
random api  

https://jsonformatter.org/ <--- for check 
*/

