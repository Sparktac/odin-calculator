const screenEquation = document.querySelector('.screen-equation');
const screenResult = document.querySelector('.screen-result');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', getInput);
});

let lastValue = '';
let firstSet = 0;
let secondSet = 0;
let savedOperator;
let equation = '';

// function getInput(e) {
//     let clickedButton = e.target.getAttribute('data-key').toString();
//     //calculateInput(clickedButton);
//     if (isNaN(lastValue)) {
//         savedOperator = lastValue;
//         lastValue = '';
//     }

//     if (isOperator(clickedButton) == false) {
//         lastValue += clickedButton;
//     } else {
//         if (savedOperator == null) {
//             firstSet = lastValue;
//         } else {
//             secondSet = lastValue;
//         }
//         lastValue = clickedButton;
//     }

//     outputScreen(lastValue);

//     if (isEquals(clickedButton) == true) {
//         let result = operate(savedOperator, firstSet, secondSet);
//         outputScreen(result);
//     }
// };

function getInput(e) {
    let dataKey = e.target.getAttribute('data-key').toString();
    if (e.target.classList.contains('number')) {
    equation += dataKey;
    


    } else if (e.target.classList.contains('operator')) {
        equation += ' ' + dataKey + ' ';
        



    } else if (e.target.classList.contains('equals')) {
        solveEquation();



    } else if (e.target.classList.contains('clear')) {
        clearScreen();
    } else if (e.target.classList.contains('delete')) {
        deleteLast();
    }
    console.log(equation);
}

function solveEquation() {
    
}

function outputScreen(result) {
    screenEquation.innerText = result;
};

function lastScreen() {
    return lastValue;
}

function currentScreen() {
    return currentButton;
}

function clearScreen() {
    screenEquation.innerText = 0;
    firstSet = 0;
    secondSet = 0;
    lastValue = '';
    savedOperator = null;
}

function deleteLast() {

}


function calculateInput(currentButton) {
    console.log(lastValue);
    console.log(currentButton);
    
};

// function operate(operator, a, b) {
//     a = Number(a);
//     b = Number(b);
//     switch (operator) {
//         case '+':
//             return add(a, b)
//         case '-':
//             return subtract(a, b)
//         case 'x':
//             return multiply(a, b)
//         case '/':
//             if (b === 0) return null
//             return divide(a, b)
//         default:
//           return null;
//     };
// };

function isEquals(value) {
    return value == '=';
};

function isOperator(value) {
    return isNaN(value); 
};


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