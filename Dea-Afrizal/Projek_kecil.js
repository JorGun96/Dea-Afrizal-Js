alert('Welcome to the Math Quiz');
alert('Before that, please register yourself.');

const name = prompt('What is your name?');
const age = prompt('How old are you?');
const height = prompt('How tall are you?');
let GF = prompt('Do you have a girlfriend?');

if (GF === 'Yes' || GF === 'yes') {
    let numGF = prompt('How many girlfriends do you have?');
    if (numGF == 1) {
        GF = `Your name is ${name}, your age is ${age}, your height is ${height}, and you have a girlfriend, cool.`;
    } else if (numGF == 2) {
        GF = `Your name is ${name}, your age is ${age}, your height is ${height}, and you have 2 GIRLFRIENDS? DAMNNN THREESOME WILL HAPPEN.`;
    } else if (numGF == 3) {
        GF = `Your name is ${name}, your age is ${age}, your height is ${height}, and you have 3??!! WTF???`;
    }
} else {
    GF = "Ohh Poor..";
}

alert(GF);
