const screen = document.querySelector('.calc-screen');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', getInput);
});

let lastValue;

function getInput(e) {
    let clickedButton = e.target;
    //console.log();
    lastValue = clickedButton;
    outputScreen(clickedButton);
}

function outputScreen(userSelection) {
    screen.innerText = userSelection;
}


function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case 'x':
            return multiply(a, b)
        case '/':
            if (b === 0) return null
            return divide(a, b)
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