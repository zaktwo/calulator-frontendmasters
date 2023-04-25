import './style.css'

let buffer = '0';
function buttonClick(value){
  // console.log(value);
  if(isNaN(parseInt(value))){
    handleSymbole(value);
  }
  else{
    handleNumber(value);
  }
}
function handleNumber(number){
  // console.log('number');
  if(buffer === '0'){
    buffer = number;
  }
  else {
    buffer += number;
    console.log(buffer);
  }
}
function handleSymbole(symbol){
console.log('symbol');
}
function init(){
  
  document.querySelectorAll(".clac-buttons").forEach(item => {
    addEventListener("click", event=>{
    buttonClick(event.target.innerText);
  });
})
}
init();