//DOM (Document Object Model)

//Change Title
document.title = 'BlaBla'
document.body
//memanggil body
//console.log(document.body)
/*
const body = document.body
body.append('Hello World')

const h1 = document.createElement('h1')
h1.textContent = "<marquee>this is H1/<marquee>";

const name = document.createElement('p')
name.innerHTML = "<marquee>Han</marquee>"

const yourName = document.createElement('p')
yourName.innerText = '<marquee>Bro</marquee>'

body.append(h1)
body.append(name)
body.append(yourName)
*/

/*
Data Selector
*/

let btn1 = document.getElementById('btn-1')
const btn2 = document.querySelector('.btn-2')

btn1.style.border = 'none';
btn1.style.padding = '8px';
btn1.style.margin = '10px';
btn1.style.backgroundColor = 'red';

function changeColor(){
    console.log('aman');
    alert('I got Touch');
    btn1.style.backgroundColor = 'Silver';
}

function changeText(){
    btn1.textContent = "YAMETE"
}
