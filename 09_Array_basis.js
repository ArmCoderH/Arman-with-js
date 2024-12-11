const myArr = [1,2,3,4,5,6]

// console.log("Array : ",myArr);
// console.log(typeof myArr);

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(5));
// console.log(myArr[5]);
// console.log(myArr.length);

// push and pop

// myArr.push(90)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

//slice and splice

// console.log("A:",myArr);

let SliceArray = myArr.slice(1,3)//not consider last index
// console.log("B:",myArr);

let spliceArray = myArr.splice(1,3)//consider last index also
// console.log("C:",myArr);


//but not only this diffrenete 
//acutally Slice :- vache thi value aape chhe
//splic :- je index apne didhi hoy chhe te array mathi remove kari diye chhe

let StringArray = myArr.join();
console.log(typeof StringArray);


/*  1. isvalue
    2. from
    3. of
*/

let score1 =200;
let score2 =200;
let score3 =200;
