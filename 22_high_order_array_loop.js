//for of loop


const gretting = ["hello","good morning","goof night"]
for (const greet of gretting) {
    // console.log(greet);
    
}


//mapping used mdn


const map = new Map();

map.set('a',19)
map.set('b',20)
// console.log(map);
// console.log(map.get('a'));

//map.delete('a')

// console.log(map.get('a'));

map.set('c',30)
// console.log(map.size);


for (const i of map) {
    // console.log(i);
    
}
for (const [i,value] of map) {
    // console.log(i,value);
    
}

///////used loop in object


const myObj = {
    js : "javascript",
    py: "python",
    java : "Java",
    cpp  : "c++"
};

//display key only
for (const key in myObj) {
  //  console.log(key);
}


//display value only
for (const key in myObj) {
    // console.log(myObj[key]);
}

//display key and value both
for (const key in myObj) {
   // console.log(`${key} is filesaving name for ${myObj[key]}`);
}




//for each loop

const coding = ["html","css","javascript","python_django","java_springboot"]

// coding.forEach( function (item){
//     console.log(item);  
// } )


//using arrow function
// coding.forEach( (val)=>{
//     console.log(val);
// } )


// function goodMorning(val)
// {
//     console.log(val);
// }
// coding.forEach(goodMorning)




// coding.forEach((val,indexe, arr)=> {
//     console.log(val, indexe, arr);
// })


//inside the array is object 

const myCoding = [
    {
        languageName : "javaji",
        languageFileName : "java"
    },
    {
        languageName : "javaScript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
]

myCoding.forEach((val)=>{
    console.log(`lan name is = ${val.languageName} && lan type is ${val.languageFileName}`);
})
