const inputNumbers = document.querySelector(".number_input");
const screenResult = document.querySelector(".show_numbers");
let numbersToSum = []
inputNumbers.setAttribute('value', 'Type number');
let resultOnScreen = ''
var result = 0

function inputValueDisappearance() {
    inputNumbers.removeAttribute('value');
}

function inputValueReappearance() {
    const { value } = inputNumbers

    if(value == '') {
        inputNumbers.setAttribute('value', 'Type number');
    }
}

function pushNumbersToArray() {
    var inputValue = inputNumbers.value
    
    if(isNaN(inputValue)) {
        alert('Você deve digitar um número.')
        return
    }
    
    if(inputValue == '') {
        alert('Você deve digitar um número.')
        return
    }

    screenResult.innerText = ''

    numbersToSum.push(inputValue)

    resultOnScreen += screenResult.innerText + `${inputValue} + `

    screenResult.innerText = resultOnScreen
    
    inputNumbers.value = ''
}

function showResult() {
    var arrayToString = String(numbersToSum)

    screenResult.innerText = ''

    for(var index = 0; index < numbersToSum.length; index++) {
        result += Number(numbersToSum[index])
    }

    screenResult.innerText = screenResult.innerText + `${arrayToString.replaceAll(',' , ' + ')} = ${result}`

    result = 0
}

function resetAll() {
    numbersToSum = []

    inputValueReappearance()

    screenResult.innerText = "Num = result"

    resultOnScreen = ''

    result = 0
}