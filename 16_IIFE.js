//iife are help of breck to globel polution 
//iife mean(immediately invoked function expressions)
//syntex is:

(function patan(){
         console.log(`DB connected`);
} 
)();

//when the name os the function is given that fucntion is
//named IIFE function
(function patan_city(){
    console.log(`i'm function`);
} 
)();

//use srrow function in IIFE method
//this function is only IIFE function
(() => {
    console.log(`i'm arrow function`);
} 
)();

//Parameter are used in iife function

(function patan_saher(answer) {
    console.log(`My Tumhara kiya hu ? = ${answer}`);
    
})('Bhai')

