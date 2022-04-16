// Functions
let salesTax = 0
let priceSubtotal = 0
let taxRate = 0.0875
let totalPrice = 0




let num1 = 0;
let num2 = 0;
let num3 = 0;
let operator1 = "";
let operator2 = ""

let calcDisplay = document.getElementById("display");
let calcTotal = document.getElementById("calc-total");
let clearBtn = document.getElementById("clear");
let resetBtn = document.getElementById("reset");

// Reset Input
resetBtn.onclick = function() {
    calcDisplay.value = "";
}

clearBtn.onclick = function () {
    calcDisplay.value = ""
    num1 = 0
    num2 = 0
    num3 = 0
    operator1 = ""
    operator2 = ""
    calcTotal.innerText = ""
}

// Number Pad
let calcNumbers = document.getElementById("numerators");
let calcNumber = calcNumbers.getElementsByClassName("number-input");
let calcOperators = document.getElementsByClassName("operator-input");

for (i=0; i < calcNumber.length; i++) {
    calcNumber[i].onclick = function () {
        calcDisplay.value += this.innerText 
    }
}

for (i=0; i < calcOperators.length; i++) {
    calcOperators[i].onclick = function () {
        
        if (num1 == 0) {
            num1 = Number(calcDisplay.value)
            operator1 = this.id
            calcDisplay.value = ""
        } else {
            num2 = Number(calcDisplay.value)
            operator2 = this.id
            calcSwitch()
            calcTotal.innerHTML = "<strong>Total</strong>: " + num3
            num1 = num3
            num2 = 0
            calcDisplay.value = ""
            if (operator1 == "equal" || operator2 == "equal") {
                operator1 = ""
                operator2 = ""
                num1 = 0
                num2 = 0
            } else {
                operator1 = operator2
                operator2 = ""
            }
        }
    }
}

function calcSwitch() {
    switch (operator1) {
        case "subtract":
            num3 = num1 - num2 
            break;

        case "multiply":
            num3 = num1 * num2    
            break;
        
        case "divide":
            num3 = num1 / num2    
            break;

        case "add":
            num3 = num1 + num2;

        default:
            break;
    }
}

function performCalc() {
    if (operator1 != "equal") {
        calcSwitch()
    } 
    
    num1 = num3
    calcTotal.innerHTML = "<strong>Total</strong>: " + num3
    calcDisplay.value = ""

    
    
}

/* function numberInput(element) {
    if (calcDisplay.value == 0) {
        calcDisplay.value = element.innerText
    } else {
        calcDisplay.value += element.innerText
    }
}
*/

/* function operatorInput(element) {
    if (element.id != "equal") {
        numerator = element.id
        if (num1 == 0) {
            num1 = Number(calcDisplay.value)
            calcTotal.innerHTML = num1 + numerator
            calcDisplay.value = ""
        } else {
            num2 = Number(calcDisplay.value)
            switch (numerator) {
                case "add":
                    calcDisplay.value = num1 + num2
                break;

                case "subtract":
                    calcDisplay.value = num1 - num2
                break;

                case "multiply":
                    calcDisplay.value = num1 * num2
                break;

                case "divide":
                    calcDisplay.value = num1 / num2
                break;
            
                default:
                    break;
            }
        }
    } else {

        
    }
}
*/


/* function operatorInput(element) {
    numerator = element.id
    numValue = Number(calcDisplay.value)

    if (num1 == 0) {
        num1 = numValue 
        calcTotal.innerText = calcDisplay.value + numerator
        calcDisplay.value = ""
        if (numerator == "equal") {
            calcDisplay.value = num1
            num1 = 0
            calcTotal.innerText = ""
        }
    } else if (num2 == 0) {
        num2 = numValue
        calcTotal.innerHTML += num2

        if (calcTotal.innerText.includes("add")) {
            num3 = num1 + num2
            num1 = 0
            num2 = 0            
        } else if (calcTotal.innerText.includes("subtract")) {
            num3 = num1 - num2
            num1 = 0
            num2 = 0
        } else if (calcTotal.innerText.includes("multiply")) {
            num3 = num1 * num2
            num1 = 0
            num2 = 0
        } else if (calcTotal.innerText.includes("divide")) {
            num3 = num1 / num2
            num1 = 0
            num2 = 0
        }

        calcDisplay.value = num3.toFixed(2)
    }
}

*/

