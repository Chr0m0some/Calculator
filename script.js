let prev_num;
let current_num = '0';
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

function readyOperation(input) {
    if (input.target.classList.contains('num')) {
        if (current_num == 0 || current_num === null) { //Should change current_num whether current_num is the default of string 0 or null
            current_num = input.target.textContent;
        }
        else {
            current_num += input.target.textContent;
        }
        //Update staged display with current_num
    }
    else if (input.target.classList.contains('operator')) {
        if (prev_num && current_num) {
            operate(operator_input, prev_num, current_num)
            if (operator_input === 'operate') {
                //Docked display shows expression 
                //Staged display shows result
            }
            else {
                //Docked display shows result concatenated with ` ${input.target.id}`
                //Staged display shows result
            }
        }
        else if (prev_num === null) {
            prev_num = current_num;
            current_num = null;
            operator_input = input.target.id;
            //Docked display would have prev_num concatenated with ` ${operator_input}`
            //Staged display shows prev_num
        }
        else {
            operator_input = input.target.id;
            //Docked display would have prev_num concatenated with new ` ${operator_input}`
        }
    }
}

const BUTTONS = document.querySelectorAll('.btn');
BUTTONS.forEach(button => button.addEventListener('click', readyOperation));