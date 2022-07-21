const screen = document.querySelector('calc-screen');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', getInput);
});

function getInput(e) {
    let clickedButton = e.target.innerText;
    outputScreen(clickedButton);
}

function outputScreen(userSelection) {
    screen.innerText = userSelection;
}


function operate(operator, a, b) {
    let a = Number(a);
    let b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b)
        case '−':
            return subtract(a, b)
        case '×':
            return multiply(a, b)
        case '÷':
            if (b === 0) return null
            else return divide(a, b)
        default:
          return null;
    };
}

// HELPER FUNCTIONS

function add(a, b) {
	return a + b;
};

function subtract(a, b) {
	return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};