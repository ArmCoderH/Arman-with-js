//exucation context



//step 1 : Global execution phase
//step 2: memory creation phase
//step 3: execution phase

let val1 = 10
let val2 = 5
function addNum(num1,num2)
{
    let total = num1 + num2;
    return total
} 

let result1 = addNum(val1,val2)
let result2 = addNum(10,2)



//in this case

// *********************START***********************

/*

step 1 : execution phase ->useing this keyword

step 2: memory phase

->val1 = undefined
->val2 = undefined
->addNum() = defination
->result1 = defination
-result2 = defination

step 3: execution phase

->val1 = 10
->val2 = 5;
->addNum() = defination
->addNum()----------------------------------->>>>>>>new vriable environment + threads



step 1: memory phase

->num1 = undefined
->num2 = undefined
->total = undefined

step 2: execution phase

->num1 = 10
->num2 = 5
->total = 15
return total ----------------------------------------------->>>>>>>>>>>   global execution





//result2 process is same as a result1.


*/