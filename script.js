/* Operations */
function add(operand1, operand2) {return operand1 + operand2}; 
function subtract(operand1, operand2) {return operand1 - operand2};
function multiply(operand1, operand2) {return operand1 * operand2};
function divide(operand1, operand2) {return (operand2 === 0) ? alert('Woah buddy...') : operand1 / operand2};

function operate(operator, num1, num2) {
    switch(true){
        case operator === 'add':
            return add(num1, num2);
        case operator === 'subtract':
            return subtract(num1, num2);
        case operator === 'multiply':
            return multiply(num1, num2);
        case operator === 'divide':
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