var num1 = parseInt(prompt("Input your first value: "))
var opr = prompt("Input your operator: ")
var num2 = parseInt(prompt("Input your second value: "))

let result;
if(isNaN(num1) || isNaN(num2)) {
    alert('invalid input')
} else {
    if(opr == "+") {
        console.log(num1 + num2)
        result = num1 + num2
    } else if(opr == "-") {
        console.log(num1 - num2)
        result = num1 - num2

    } else if(opr == "*") {
        console.log(num1 * num2)
        result = num1 * num2

    } else if(opr == "/") {
        console.log(num1 / num2)
        result = num1 / num2
    }
    alert(num1 + opr + num2 +' = ' +result)
}

 