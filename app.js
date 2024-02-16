const display = document.getElementById("display");

function appendToDisplay(input){
display.value += input;
}

function clearDisplay(){
  display.value = "";
  }

function del(){
 const currValue =  display.value;
 display.value = currValue.slice(0, -1);
}

function calculate(){
  try{
  display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error";
  }
}



