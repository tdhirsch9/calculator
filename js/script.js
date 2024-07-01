const numberButtons = document.querySelectorAll(".number")
const display = document.getElementById("calc-display")
const reset = document.getElementById("reset")
const dotButton = document.querySelector(".dot")

numberButtons.forEach(button => {
    button.addEventListener('click', function(){
        const buttonText = button.textContent

        if(display.value === '0'){
            display.value = buttonText
        } else{
            display.value += buttonText
        }

        
    })
})

dotButton.addEventListener('click', function() {
    if (!display.value.includes('.')){
        display.value += '.'
    } 
})

reset.addEventListener('click', function() {
    display.value = 0;
})


function receiveInput(numberButtons){

}