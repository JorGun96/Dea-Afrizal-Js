document.body
let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
 
//styling Button 1 
btn1.style.height = '50px';
btn1.style.width = '50px';
btn1.style.backgroundColor = 'green';
btn1.style.padding = '25px';
btn1.style.margin = '25px';

//styling Button 2
btn1.style.height = '50px';
btn1.style.width = '50px';
btn1.style.backgroundColor = 'yellow';
btn1.style.padding = '25px';
btn1.style.margin = '25px';



function changeColor1(){
    btn1.style.backgroundColor = "blue";
}

function changeColor2(){
    btn2.style.backgroundColor = "red";
}

function changeText1(){
    btn1.textContent = "You change me!";
}