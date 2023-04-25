import "./style.css";

let buffer = "0";
let runningTotal = 0;
let previousOperator = '';
const screen = document.querySelector(".result");

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbole(value);
  } else {
    handleNumber(value);
  }
  rerender();
}
function handleNumber(number) {
  if (buffer === "0") {
    buffer = number;
  } else {
    buffer += number;
  }
}
function flushOperation(intBuffer){
  if(previousOperator === '+'){
    runningTotal += intBuffer;
  } else if(previousOperator === '÷'){
    runningTotal /= intBuffer;
  } else if(previousOperator === '-'){
    runningTotal -= intBuffer;
  } else if(previousOperator === '×'){
    runningTotal *= intBuffer;
  } 
}
function mathOperations(value) {
  if (buffer === "0") {
    // do nothing
    return;
  }
  const intBuffer = parseInt(buffer);
  if(runningTotal === 0){
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOperator = value;
  buffer = '0';
  console.log(runningTotal); 
}
function handleSymbole(symbol) {
  if (symbol === "C") {
    buffer = "0";
  } else if (symbol === "←") {
    if (buffer.length === 1) {
      buffer = "0";
    } else {
      buffer = buffer.slice(0, -1);
    }
  } else if (symbol === "×") {
    mathOperations(symbol);
  } else if (symbol === "-") {
    mathOperations(symbol);
  } else if (symbol === "+") {
    mathOperations(symbol);
  } else if (symbol === "÷") {
    mathOperations(symbol);
  }  else if (symbol === "=") {
    if (previousOperator === null) {
      // needs numbers to do math
      return;
    }
    
    flushOperation(parseInt(buffer));
    previousOperator = null;
    buffer = "" + runningTotal;
    runningTotal = 0;
  }
}
function init() {
  let btn = document.querySelectorAll(".clac-buttons"); // this how to get all the buttons at once
  btn.forEach((item) => {
    //using this method of foreach loop to get clicks from each button individually
    item.addEventListener("click", (event) => {
      //never forget to use the item iterator so the foreach work correctly with no funny effects
      buttonClick(event.target.innerText); // the innerText is to get the text from the div
    });
  });
}

function rerender() {
  screen.innerText = buffer;
}
init();
