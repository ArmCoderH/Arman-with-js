//stack and heap

/*Stack give copy of the given value

Heap give refrence of the orignal*/ 


// let myName = "Arman"
// console.log("name is=",myName);

// let newName = myName
// console.log(newName);

// newName = "ArmnaHingora"
// console.log(newName);

// console.log("name is=",myName);

//********************************************
//string Interpolation 

//const myCar = "BMW"
//const house = "Birla"
//console.log(`My car name is ${myCar}, My House Name Is ${house}`);


//////////////////////////////////////////////////////

/*some types of method

    1.length
    2.toUpperCase()
    3.toLowerCase()
    4.charAt() <- using index number find charcter
    5.charCodeAt()<- give ascii value
    6.slice(position) <- 
    7.substring(postion) <- Work like a name
    8.concat() <- marge to string
    9.trim()<- remove whiteSpaces
    10.repeat(number)<- repeat string 
    11.replace() <- this name replace with each other 
    12.include() <- find name 
    13.split() <-divide with some sign like [armna - hignora - wait]

*/

const gameName = new String('ArmanHingora')//object creation
// console.log(gameName[10]);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(5));
console.log(gameName.charCodeAt(3));
console.log(gameName.slice(-8,4));
console.log(gameName.substring(-8,4));
console.log(gameName.repeat(" ",2));

const carCollection  = ['BMW','Audi','Farari','Lembo']; 
console.log(carCollection.includes("Audi","Lambo"));


const text = "htttps//:mynameisraman*2.edu.in"
console.log(text.replace("*2","hello"));


let firstName = "Love"
let secondName = "Babber"
let fullName = firstName.concat(" ",secondName)
console.log(fullName);

const removeSpace = "  Hello  "
console.log(removeSpace.trim());






