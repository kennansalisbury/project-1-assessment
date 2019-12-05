const INPUT = document.getElementById('num-input')
const OUTPUT = document.getElementById('num-output')

//upon load 
    //counter = 0
    //input value = 1

let outputCounter = 0
let inputValue = 1

INPUT.value = inputValue

const updateCounter = () => {
    OUTPUT.textContent = outputCounter
}

const updateColorNegative = () => {
    if (outputCounter < 0) {
        OUTPUT.style.color = "red"
    }
    else {
        OUTPUT.style.color = "black"
    }
}

updateCounter()

//when plus button clicked, value entered in input is added to count and new count is displayed
document.getElementById('plus-btn').addEventListener('click', () => {
    inputValue = parseInt(INPUT.value)
    outputCounter += inputValue
    updateCounter()
    updateColorNegative()
})

//when minus button clicked, value entered in input is subtracted from count and new count is displayed
document.getElementById('minus-btn').addEventListener('click', () => {
    inputValue = parseInt(INPUT.value)
    outputCounter -= inputValue
    updateCounter()
    updateColorNegative()
})

