var readlinesync = require('readline-sync');

var firstNumber = readlinesync.questionInt("Please enter your first number: ");
var secondNumber = readlinesync.questionInt("Please enter your first number: ");
var enteredOperator = readlinesync.question("Please enter the operation to perform:  add/sub/mul/div ");

function addTwoNumbers(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
function subTwoNumbers(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}
function multiplyTwoNumbers(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}
function divideTwoNumbers(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}


function myCalculator(firstNumber, secondNumber, enteredOperator){
    if (enteredOperator == "add"){
        console.log("Addition of Number-1:" + firstNumber + " with Number-2: " + secondNumber + "Gives you a Result of" + addTwoNumbers(firstNumber, secondNumber));
    }
    else if(enteredOperator == "sub"){
        console.log("Subtraction of Number-1:" + firstNumber + " with Number-2: " + secondNumber + "Gives you a Result of" + subtractTwoNumbers(firstNumber, secondNumber));
    }
    else if(enteredOperator == "mul"){
        console.log("Multiplication of Number-1:" + firstNumber + " with Number-2: " + secondNumber + "Gives you a Result of" + multiplyTwoNumbers(firstNumber, secondNumber));
    }
    else if(enteredOperator == "div"){
        console.log("Division of Number-1:" + firstNumber + " with Number-2: " + secondNumber + "Gives you a Result of" + divideTwoNumbers(firstNumber, secondNumber));

    }
    else {
        console.log("Operation is not recognized. Please try again!")

    }
}

myCalculator(firstNumber, secondNumber, enteredOperator);
