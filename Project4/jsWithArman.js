//random color generet first

const randomColor = function(){
    const  hex = '0123456789ABCDEF'

    // console.log(random);
    let color = '#'
    for(let i = 0; i < 6;i++)
    {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let intervalId;
const startChangeColor = function ()
{
    if(!intervalId){
        intervalId = setInterval(changeBG,1000)
    }
    function changeBG()
    {
        document.body.style.backgroundColor = randomColor();
    }
}
const stopChangeColor = function ()
{
    clearInterval(intervalId)
    intervalId = null;
}
document.querySelector('#start').addEventListener('click',startChangeColor)
document.querySelector('#stop').addEventListener('click',stopChangeColor)



