/* ------------------- RANDOM CODES ------------------- */

// NOTE: "submit" button is initially disabled upon loading of this page - see <body> in html

// Function to generate combination of characters 
function generateCode() {
    // Create variables to store generated codes and the type of characters we want to show as codes 
    var code = ' ';   // to store generated codes and initialize to empty value
    var getCode = ' ';   // to store entered code 
    var btnValue;     // for button boolean value

    // create variable to hold the type of characters we want to show as codes 
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    // Generate characters multiple times using a loop
    for (i =1; i <= 8; i++) {
        var char = Math.random() * str.length;    // randomly select a character from the variable and then store in a new variable 
        code += str.charAt(char);     // accumulate the generated character into a string of 8 characters
    }
    return code;   // return the final accumulated string when loop ends 
}

// Get HTML element to display 
document.getElementById("codes").innerHTML = generateCode();

// determine when to able or disable button
function disableButton(btnValue) {
    document.getElementById("submit").disabled = btnValue;   // able/disable button

    if (btnValue == true) { // test if button is disabled or enabled 
        // set button and label color translucent
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        // set button and label color with no transparency
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
    }
}

// Activate function
// Side note: If not be invisible if we don't switch off the background color
disableButton();