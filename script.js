const BUTTONS = document.querySelectorAll('.btn');
const DOCKED_AREA = document.querySelector('.docked');
const STAGED_AREA = document.querySelector('.staged');

let prev_num = '';
let current_num = '0';
let inputs = [];
let active_operator;

/* Operations */
function add(operand1, operand2) { return (operand1 + operand2).toString() };
function subtract(operand1, operand2) { return (operand1 - operand2).toString() };
function multiply(operand1, operand2) { return (operand1 * operand2).toString() };
function divide(operand1, operand2) { return (operand2 === 0) ? alert('Woah buddy...') : (operand1 / operand2).toString() };

function operate(operator, num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch (true) {
        case operator === '+':
            console.log(add(num1, num2));
            return add(num1, num2);
        case operator === '-':
            console.log(subtract(num1, num2));
            return subtract(num1, num2);
        case operator === '×':
            console.log(multiply(num1, num2));
            return multiply(num1, num2);
        case operator === '÷':
            console.log(divide(num1, num2));
            return divide(num1, num2);
        default:
            break;
    }

}

/* 

    Default number of 0 is on the display and set up as the current number on display
    IF the user were to click a number:
        the number would be set up as the current number instead of 0
        IF the current number is still staged: 
            Add on to the number as a string
    IF the user were to click an operation:
        Previous number would be set to the current number and current number would be set to nothing
        Operation would join the previous number in the docked section of the display
    IF the user were to click any of the operators or the equal sign when both numbers and the operator is set up:
        Run operate function with set operator and operands


*/

function readyNumbers(e) {
    if (current_num == 0) { //Evaluates to true when current_num is an empty string or "0"
        current_num = e.target.textContent;
    }
    else {
        current_num += e.target.textContent;
    }
    STAGED_AREA.textContent = current_num; 
}

function changeDisplay(e) {
    if (prev_num && current_num) {
        let result = operate(active_operator, prev_num, current_num);
        if (e.target.id === 'operate') {
            DOCKED_AREA.textContent = `${prev_num} ${active_operator} ${current_num} =`; 
        }
        else {
            active_operator = e.target.textContent;
            DOCKED_AREA.textContent = `${result} ${active_operator}`
        }
        STAGED_AREA.textContent = result; 
        prev_num = result; 
        current_num = ''; 
        return;
    }
    else if (prev_num === '') {
        prev_num = current_num;
        current_num = '';
    }
    active_operator = e.target.textContent;
    DOCKED_AREA.textContent = prev_num + ` ${active_operator}`; 
}

function readyOperation(event) {
    if (event.target.classList.contains('num')) {
        readyNumbers(event);
    }
    else if (event.target.classList.contains('operator')) {
        changeDisplay(event);
    }
}

BUTTONS.forEach(button => button.addEventListener('click', readyOperation));