var num1 = parseInt(prompt("Input your first value: "))
var opr = prompt("Input your operator: ")
var num2 = parseInt(prompt("Input your second value: "))



if(opr == "+") {
    console.log(num1 + num2)
    alert(`${num1} + ${num2} = ${num1 + num2}`)
} else if(opr == "-") {
    console.log(num1 - num2)
    alert(`${num1} - ${num2} = ${num1 - num2}`)
} else if(opr == "*") {
    console.log(num1 * num2)
    alert(`${num1} * ${num2} = ${num1 * num2}`)
} else if(opr == "/") {
    console.log(num1 / num2)
    alert(`${num1} / ${num2} = ${num1 / num2}`)
} else {
    alert("Assign a valid operator ( + , - , * , / )")
}
 
if(num1 == NaN) {
    console.log("hello")
}