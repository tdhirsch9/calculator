const calcButtons = document.querySelectorAll(".calc-btn")
const display = document.getElementById("calc-display")
const reset = document.getElementById("reset")
const decimalButton = document.querySelector(".dot")
const operators = document.querySelectorAll(".operator")
const equalsButton = document.querySelector(".equals")
const operatorValue = ["+", "-", "x", "/"]

let firstValue = ""
let operator = ""
let secondValue = ""
let result = ""
let recentEquals = false



function operate (){
    num1 = parseFloat(firstValue)
    num2 = parseFloat(secondValue)

    if (isNaN(num1) || isNaN(num2)) {
        return "Error"; 
    }

    if (operator === "+"){
        result = num1 + num2;
    } else if (operator === "-"){
        result = num1 - num2;
    } else if (operator === "÷"){
        result = num1 / num2;
    } else if (operator === "x"){
        result = num1 * num2;
    }
    result = parseFloat(result.toFixed(2));
    return result
}


calcButtons.forEach(btn => {
   btn.addEventListener('click', function(){
    let buttonValue = btn.textContent


    if (firstValue !== "" && secondValue === "0" && operator === "÷") {
        display.value = "Nice try guy";
        firstValue = ""
        secondValue = ""
        operator = ""
        result = ""
        return;
    } else if (firstValue !== "" && secondValue === "" && recentEquals === true && buttonValue >= 0 && buttonValue <= 9){
         display.value = buttonValue
         result = ""
         firstValue = ""
         operator = ""
         secondValue = ""
         recentEquals = false
    }

    if(buttonValue === "=" && firstValue !== "" && secondValue === "" && result === ""){

        display.value = display.value

    } else if(buttonValue === "="){
        operate()
        display.value = result
        console.log("first value", firstValue, operator, secondValue, "second value equals", result ) 
        firstValue = result
        secondValue = ""
        operator = ""


        result = ""
        recentEquals = true

    } else if(firstValue !== "" &&  result === "" && secondValue === "" && operator === "" && buttonValue >= 0 && buttonValue <= 9){
       result = ""
       display.value = 0
       firstValue += buttonValue
       display.value = firstValue
       recentEquals = false

    } else if(firstValue !== "" && secondValue !== "" && operator !== "" && result === "" && (buttonValue === "+" || buttonValue === "-" || buttonValue === "x" || buttonValue === "÷")){
        operate()
        firstValue = result
        secondValue = ""
        display.value = firstValue
        operator = buttonValue
        recentEquals = false    


    } else if(firstValue !== "" && operator !== "" && buttonValue !== "" && (buttonValue === "+" || buttonValue === "-" || buttonValue === "x" || buttonValue === "÷")){
       
        operate()
        firstValue = result
        display.value = firstValue
        secondValue = ""
        operator = buttonValue
       
        recentEquals = false


    }  else if(firstValue !== "" && operator === "+" || operator === "-" || operator === "x" || operator === "÷"){
      secondValue += buttonValue
      display.value = secondValue
   
      
      recentEquals = false
 
      
    } else if(buttonValue >= 0 && buttonValue <= 9){
        
       firstValue += buttonValue
       display.value = firstValue  
       recentEquals = false

    } else if(buttonValue === "+" || buttonValue === "-" || buttonValue === "x" || buttonValue === "÷"){
        operator = buttonValue
        recentEquals = false
    }
    
    })
})


decimalButton.addEventListener('click', function() {

    firstValue = firstValue.toString();
    secondValue = secondValue.toString();

    if (operator === "") {
        
        
        if (!firstValue.includes('.')) {
            if (firstValue === "") {
                firstValue = "0.";
            } else {
                firstValue += ".";
            }
            display.value = firstValue;
        }
    } else {
        
        if (!secondValue.includes('.')) {
            if (secondValue === "") {
                secondValue = "0.";
            } else {
                secondValue += ".";
            }
            display.value = secondValue;
        }
    }
});

reset.addEventListener('click', function() {
    firstValue = ""
    secondValue = ""
    operator = ""
    display.value = 0
    result = ""
})
