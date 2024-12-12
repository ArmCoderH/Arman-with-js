/*mainly two types of objects declaration 
1. literaval  -< not singleton
2. using constructor <- this is singleton
*/

//declaring symbol 

const mySym = Symbol("key1");


const jsobject = {
    name: "arman",
    age : 18,
    [mySym] : "hello bhai", // [ ]  used for symbol datatype
    location : "rajkot",
    email : "arman@gmail.com",
    login : false
}

//acsses object

// 1st method is

// console.log(jsobject.name); //-<- this method is not proper mathod

//2nd method

// console.log(jsobject["email"]);  // with datatypes 
// console.log(jsobject.age);
// console.log(jsobject["location"]);
// console.log(jsobject["name"]);
// console.log(jsobject[mySym]);

//symbol access karva mate object ma '[ ]' aa no used karvo pade chhe

jsobject.email = "hingora@2005"
console.log(jsobject);
//Object.freeze(jsobject)
jsobject.email = "hingora"
console.log(jsobject);
 
//when you can freeze the object then cannot updated any elements of given obejct


jsobject.ObjectAccFun = function(){
    console.log("hello maja ma");
} 


jsobject.ObjectAccFunTwo = function(){
    console.log(`hello maja ma ${this.email}`);
} 
console.log(jsobject.ObjectAccFun());
console.log(jsobject.ObjectAccFunTwo());
