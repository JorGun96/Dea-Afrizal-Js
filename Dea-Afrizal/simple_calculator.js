let Input = prompt("Please Input 1 or 2 digits for first number")
let Input2 = prompt("Please Input 1 or 2 digits for second number number")
let Operator = prompt("Please input the operator you wanna use? + - x / ")

switch(Operator){
    case "+":
        if(Operator == "+"){
            Operator = Number(Input) + Number(Input2);
            alert(`the result is ${Operator}`)
        }
        break
    case "-":
        if(Operator == "-"){
            Operator = Number(Input) - Number(Input2);
            alert(`the result is ${Operator}`)
        }
        break
    case "x":
        if(Operator == "x"){
            Operator = Number(Input) * Number(Input2)
            alert(`the result is ${Operator}`)
        }
        break
    case "/":
        if(Operator == "/"){
            Operator = Number(Input) / Number(Input2)
            alert(`the result is ${Operator}`)
        }
        break
    default:
        alert("Invalid operator! Please use +, -, x, or /.");
        break;
}   