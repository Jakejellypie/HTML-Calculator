/* Assigning Each button as a variable in JS*/

/*Numeric Vars */
var OneButton = document.getElementById("SixthButton");
var TwoButton = document.getElementById("SeventhButton");
var ThreeButton = document.getElementById("EighthButton");
var FourButton = document.getElementById("EleventhButton");
var FiveButton = document.getElementById("TwelfthButton");
var SixButton = document.getElementById("ThirteenthButton");
var SevenButton = document.getElementById("SixteenthButton");
var EightButton = document.getElementById("SeventeenthButton");
var NineButton = document.getElement("EighteenthButton");

/*Operator Vars */
var Clear = document.getElementById("FirstButton");
var LeftBracket = document.getElementById("SecondButton");
var RightBracket = document.getElementById("ThirdButton");
var Percentage = document.getElementById("FourthButton");
var Backspace = document.getElementById("FifthButton");
var Multiply = document.getElementById("NinthButton");
var Divide = document.getElementById("TenthButton");
var Subtract = document.getElementById("FourteenthButton");
var Add = document.getElementById("FifteenthButton");
var DecimalPoint = document.getElementById("NineteenthButton");
var EqualSign = document.getElementById("TwentiethButton");


// Creating a function to user inputs on the ResultArea.
Display(){
    
}

OneButton.addEventListener("click", function() {
    Display("1");
});


hazards_button.addEventListener('click', function() {
    // When the button is clicked, add 'active' class to the popup
        hazards_popup.classList.add('active');
        overlay.classList.add('active');
    
    });