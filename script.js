// Create a calculator class to represent a calculator 

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }
    delete() {}
    appendNumber(number) {
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    chooseOperation(operation) {}
    compute() {}
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
}

// Assign DOM elements to variables

const numberButtons = document.querySelectorAll('[data-number');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

// Instantiate a new calculator

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// Assign an event listener to each number button

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});