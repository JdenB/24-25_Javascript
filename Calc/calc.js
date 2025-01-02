// Setup Access to HTML Elements
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
document.getElementById("container").style.display = "block";
document.getElementById("container").style.color = "black";
document.getElementById("container").style.marginLeft = "auto";
document.getElementById("container").style.marginRight = "auto";

// Add listener to all buttons
buttons.forEach(
    function(button){
        button.addEventListener("click", calculate);
    }
);

function calculate(event){
    // What button was clicked?
    const clickedValue = event.target.value;

    if(clickedValue === "="){
        // Is the display empty?
        if(display.value !== ""){
            // Calculate the value and display it
            display.value = eval(display.value);
        }
    } else if(clickedValue === "C"){
        display.value = "";
    }else{
        display.value += clickedValue;
    }
}