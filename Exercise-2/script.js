

const display = document.getElementById("display"); //get the id of display

function appendToDisplay(input){ //to append the clicked button values to display field
    display.value += input;
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    try{
        display.value=eval(display.value); //eval func performs arithmetic operations
    }
    catch(error){
        display.value="Error";
    }
}