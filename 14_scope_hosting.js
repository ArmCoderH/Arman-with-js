
//here used scope in this case only scope data are can used other wise shoew  this data re undefined 

function one()
{
    const username = "arman"

    function two()
    {
        const dataHere = "myName"
  //      console.log(username)
    }
//   console.log(dataHere);
    
    two()
}
one()



console.log(add(5));

function add(num)
{
    return num + 1;
}
//add(5)


console.log(add2(5));

function add2(num)
{
    return num + 1;
}
//add(5)


const addTwo = function(num)
{
    return num + 2;
}
console.log(addTwo(5));
