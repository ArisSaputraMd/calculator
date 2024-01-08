let currentInput = '';
let currentOperate = '';
let prevInput = '';
let resultDisplay = false;

function getBtn (val) {
    if (resultDisplay){
        clear()
    }resultDisplay = false;
    currentInput += val;
    updateDisplay();
}

function operate(operation){
    if (currentInput !== ''){
        if (prevInput !== ''){
            calc();
        }
        currentOperate = operation;
        prevInput = currentInput;
        currentInput = '';
    }
}

function calc(){
    let result;
    const previous = parseFloat(prevInput);
    const current = parseFloat(currentInput);
    if (!isNaN(previous) && !isNaN(current)) {
        switch (currentOperate) {
            case '+' :
                result = previous + current
                break;
            case '-' :
                result = previous - current
                break;
            case '*' :
                result = previous * current
                break;
            case '/' :
                result = previous / current
                break;
        }
        currentInput = result.toString();
        currentOperate = '';
        prevInput = '';
        resultDisplay = true;
        updateDisplay()
    }
}

function clear (){
    currentInput = '';
}

function clearAll(){
   currentInput = '';
    currentOperate = '';
    prevInput = '';
    updateDisplay()
};

function del(){
    currentInput = currentInput.slice(0,currentInput.length-1);
    updateDisplay()
}

function decimal (){
    if (!currentInput.includes('.'))
    currentInput += '.';
    updateDisplay();
}

function updateDisplay(){
   const display = document.querySelector(".display");
   display.textContent = currentInput || '0';

}