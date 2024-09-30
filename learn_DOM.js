document.title = 'Farhan'
/*lesson 1

const body = document.body

body.append('Farhan')

const h1 = document.createElement('h1')
h1.textContent = "This is H1"

const nama = document.createElement('name')
nama.innerHTML = "<marquee>My name is farhan</marquee>"

const question = document.createElement('q')
question.innerText = "What's your name?"

alert("My name is " + prompt("what is your name ?"))

body.append(h1)
body.append(nama)
body.append(question)
*/


const body = document.body
const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')

const defaultText = 'Touch Me, Onii-chan'
btn1.textContent = defaultText

btn1.style.border = 'none'
btn1.style.padding = "8px"
btn1.style.fontSize = '24px'
btn1.style.backgroundColor = 'gold'

function clickBottom() {
    btn1.style.backgroundColor = 'silver'
    const newText = document.createElement('p')
    newText.textContent = "HELLO YOUR COMPUTER HAS A VIRUS"
    body.append(newText)
}

function ubahText() {
    btn1.textContent = 'Bruh Really?'
    console.log('hayoooo')
}

function berubah() {
    btn1.textContent = defaultText

}



btn2.style.border = 'none'
btn2.style.padding = "8px"
btn2.style.fontSize = '24px'
btn2.style.backgroundColor = 'red'

function onIN() {
    btn2.style.backgroundColor = 'green'
    const text2 = document.createElement('p')
    text2.textContent = "WHAT THE DOG DOING?"
    body.append(text2)
}

function onClick() {
    btn2.style.backgroundColor = 'purple'
    const text3 = document.createElement('p')
    text3.textContent = "NYAAA~~~~~"
    body.append(text3)
}

function onOUT() {
    btn2.style.backgroundColor = 'blue'
    const text4 = document.createElement('p')
    text4.textContent = "GOBLOK"
    body.append(text4)
}