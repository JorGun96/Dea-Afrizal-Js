//alert("Hello World")



//prompt('Give your god damn money')

//let money = 300

/*var money = prompt('How much money do you want?')
alert('You just got ' + money)*/



var name = 'Farhan'
var age = 19
let height = 175.5
let width
let Girlfriend = null


if (Girlfriend == null) {
    Girlfriend = 'dont have'   //(if else)
} else {
    Girlfriend = 'Have'
}

/*
switch (Girlfriend) {
    case 1:
        Girlfriend = 'dont have'
        break
    case 2:
        Girlfriend = 'I have'
        break
}
*/

var myWallet = 500000
var bonus = 300000
const MoneyNow = myWallet + bonus
const Debt = 400000
const total = MoneyNow - Debt

//alert('your name is ' + name + ' and your age is ' + age)
alert(`my name is ${name} , my age is ${age} , my height is ${height} , and my width is ${width} , and i ${Girlfriend} girlfriend `)

alert(`my money in the pocket right now is Rp${myWallet} and today i got bonus Rp${bonus}, HECK YEAH so now my money right now is Rp${MoneyNow}`)

alert(`but i remember i have Debt Rp${Debt} so my money now is Rp${total}`)