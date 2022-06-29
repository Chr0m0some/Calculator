let prev_num;
let current_num;
let inputs = [];
let operator_input;
/* Operations */
function add(operand1, operand2) {return operand1 + operand2}; 
function subtract(operand1, operand2) {return operand1 - operand2};
function multiply(operand1, operand2) {return operand1 * operand2};
function divide(operand1, operand2) {return (operand2 === 0) ? alert('Woah buddy...') : operand1 / operand2};

function operate(operator, num1, num2) {
    switch(true){
        case operator === 'add':
            console.log(add(num1, num2));
            return add(num1, num2);
        case operator === 'subtract':
            console.log(subtract(num1, num2));
            return subtract(num1, num2);
        case operator === 'multiply':
            console.log(multiply(num1, num2));
            return multiply(num1, num2);
        case operator === 'divide':
            console.log(divide(num1, num2));
            return divide(num1, num2);
        default:
            break;
    }
    
}

/* 

    Default number of 0 is on the display and set up as an operand1
    IF the user were to click a number:
        the number would be set up as operand1 instead
    IF the user were to click an operation:
        0 would continue as operand1 with operation performing on it
    IF the user were to click another number while operation is setup and the equal sign is clicked:
        Run operate function with set operator and operands


*/

/* 

*/
function readyOperation(input) {
    if (input.target.classList.contains('num')) {
        inputs.push(parseInt(input.target.textContent));
    }
    else if (input.target.classList.contains('operator')) {
        operator_input = input.target.id;
    }
    else if (input.target.id == 'operate') {
        operate(operator_input, ...inputs);
    }
}

const BUTTONS = document.querySelectorAll('btn');
BUTTONS.forEach(button => button.addEventListener('click', readyOperation));