const disp = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');
const clear = document.querySelector('.clear');
const percent = document.querySelector('.percent');


let firstNum = '';
let secondNum = '';
let operator = '';
let hasBeenCalled = '';
disp.textContent = '';



numbers.forEach(item => item.addEventListener('click', () => displayNum(item)));
operators.forEach(item => item.addEventListener('click', () => setOperator(item)));
clear.addEventListener('click', () => allClear());
equals.addEventListener('click', () => setOperator("="));
percent.addEventListener('click', () => convertToPercent());
decimal.addEventListener('click', () => insertDecimal());

 
function operate(num1, num2, symbol){

    if(symbol == '*'){
                multiply(num1, num2);
         } 
    else if (symbol == '+'){
        add(num1, num2);
    } 
    else if (symbol == '-'){
        subtract(num1, num2);
    }
    else if (symbol == '/'){
        divide(num1, num2);
    }
}

function displayNum(item){
    if (hasBeenCalled == 'true' || disp.textContent == 'Error: Division By Zero'){
        disp.textContent = '';
    } 
    disp.textContent += item.textContent;
    hasBeenCalled = '';

}
function setOperator(item){
    if(item == '=' && firstNum != '' && secondNum == ''){
        secondNum = disp.textContent;
        operate(firstNum, secondNum, operator);
        operator = '';
    }
     else if(operator == ''){
        firstNum = disp.textContent
        operator = item.textContent
        disp.textContent = '';
     }  
     else if(operator != '' && firstNum != '' && secondNum == ''){
        secondNum = disp.textContent
    
        if (operator != '' && firstNum != '' && secondNum != ''){
          operate(firstNum, secondNum, operator);
    }
}
}

function multiply (num1, num2) {
     disp.textContent = num1 * num2;
     firstNum = num1 * num2;
     secondNum = '';
     hasBeenCalled = 'true';
    }

 function add (num1, num2){
        disp.textContent = parseInt(num1) + parseInt(num2);
        firstNum = parseInt(num1) + parseInt(num2);
        secondNum = '';
        hasBeenCalled = 'true';
 }

 function subtract (num1, num2){
    disp.textContent = num1 - num2;
    firstNum = num1 - num2;
    secondNum = '';
    hasBeenCalled = 'true';
 }

 function divide (num1, num2){
    if (num1 == 0 || num2 == 0){
        disp.textContent = 'Error: Division By Zero'
        firstNum = ''
        secondNum = ''
    }
    else{
    disp.textContent = num1 / num2;
    firstNum = num1 / num2;
    secondNum = '';
    hasBeenCalled = 'true';
    }
 }
function allClear(){
    disp.textContent = ''
    firstNum = ''
    secondNum = ''
    operator = ''
}

function convertToPercent()
{
    let newValue = disp.textContent;
    disp.textContent = ((newValue * .10).toFixed(2));
}

function insertDecimal(){
    disp.textContent += '.'
    
}