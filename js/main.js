
const add = document.getElementById('plus');
const subtract = document.getElementById('minus');
const screen = document.getElementById('display').textContent

let result = 0;
let show, num1, num2;
    
function color(x){
    if (result >= 0){
        document.getElementById("display").style.color = "black";
    }
    else if(result < 0){
        document.getElementById("display").style.color = "red";
    }
    else{
        document.getElementById("display").style.color = "black";
    }
}
    

add.addEventListener('click', function(evt){
    const inp = document.querySelector('input').value;
    num1 = parseInt(inp);
    show = document.getElementById('display').innerHTML;
    num2 = parseInt(show);
    result = num1 + num2;
    document.getElementById('display').textContent = result;
    color();
})


subtract.addEventListener('click', function(evt){
    const inp = document.querySelector('input').value;
    num1 = parseInt(inp);
    show = document.getElementById('display').innerHTML;
    num2 = parseInt(show);
    result = num2 - num1;
    document.getElementById('display').textContent = result;
    color();
})

