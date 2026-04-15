const calculatorDisplay = document.getElementById("calculatorDisplay");

function appendValue(value) {
    calculatorDisplay.value += value;
}

function resetDisplay() {
    calculatorDisplay.value = "";
}

function evaluateExpression() {
    try {
        calculatorDisplay.value = eval(calculatorDisplay.value);
    } catch {
        calculatorDisplay.value = "Error!";
    }
}