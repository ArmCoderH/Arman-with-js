// is video mai hum variable or basic concept ki baat karenge

const userID = 12345
let yourEmailId = "arman@gmail.com"
var yourPassword = "123456"
yourCity = "Rajkot"

/*here used three types of variables
    1. const -> means cannot change value during program
    2. let vs Var -> in this case var not used because it dose not work in high blocks
    3. without keyword -> this method is very "bogas" method.....
*/

console.table([userID,yourEmailId,yourPassword,yourCity])

// change variable value
console.log("change vriable values");

yourEmailId = "armanhingora@gmail.com"
yourPassword = "785487"
yourCity = "jamnagar"
console.table([userID,yourEmailId,yourPassword,yourCity])
