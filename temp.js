/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  1. In the HTML, have one input field where someone can enter
      in a temperature.
  2. Create a radio button group where Celsius or Fahrenheit 
      can be selected as the scale that the number should be 
      converted to.
  3. Create a block level element that will hold the text of the
      converted temperature.
  4. Create a button that, when clicked, displays the converted.
  5. Create another button that, when clicked, clears any text
      in the input field.
  6. Add an event handler to the input field that checks if the 
      user pressed the enter key, and if that happens, perform
      the conversion.
  7. If the temperature is greater than 90F/32C the color of 
      the converted temperature should be red.
  8. If the temperature is less than 32F/0C the color of 
      the converted temperature should be blue.
  9. For any other temperature, the color should be green.
*/

var temp;

//+++ PERFORM CALC WHEN 'ENTER' IS PRESSED  +++//
var usersTemp = document.getElementById("usersTemp");
usersTemp.addEventListener("keyup", document.onkeyup = function (evt) {
  var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
  if (keyCode == 13) {
    // console.log("ENTER KEY TRIGGERS");\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    if (gRadioValue === "fahrenheit") {
      toFahrenheit();
    }
    else if (gRadioValue === "celsius") {
      toCelsius();
    }
    determineConverter();
  }
});

//+++ DETERMINE RADIO BUTTON SELECTION +++//
var gRadioValue = document.getElementsByName("radio"); //global declared outside of function
//console.log("Initial gRadioVal is ", gRadioValue);
function determineConverter () {
  console.log("In determineConverter function");
    var radioVal = gRadioValue;
    console.log("radioVal = ", radioVal);
}

//+++ CLEAR INPUT AND OUTPUT AREAS +++//
clearButton.addEventListener("click", function() {
  usersTemp.value = "";
  document.getElementById("converted_content").innerHTML = "";
});

//+++ CONVERSION BUTTON +++//
conversion_button.addEventListener("click", function() {
  // console.log("conversion button clicked")
  determineConverter();
  if (gRadioValue === "fahrenheit") {
    toFahrenheit();
  }
  else if (gRadioValue === "celsius") {
    toCelsius();
  }
});

//+++ CALC CELSIUS +++//
function toCelsius (temp) {
  console.log("function toCelsius triggered")
  temp = usersTemp.value;
  temp = (temp - 32) * 5/9;
  temp = temp.toFixed(2);

  if (temp > 32) {
    document.getElementById("converted_content").style.color = "red";
  }
  else if (temp < 0) {
    document.getElementById('converted_content').style.color = "blue";
  }
  else {
    document.getElementById('converted_content').style.color = "green";
  }
  converted_content.innerHTML =  usersTemp.value + " degrees Fahrenheit = " + temp + " degrees Celsius";
}

//+++ CALC FAHRENHEIT +++//
function toFahrenheit (temp) {
  console.log("function toFahrenheit triggered")
  temp = usersTemp.value;
  temp = (temp * 1.8) + 32;
  temp = temp.toFixed(2);
  if (temp > 90) {
    document.getElementById("converted_content").style.color = "red";
  }
  else if (temp <32) {
    document.getElementById('converted_content').style.color = "blue";
  }
  else {
    document.getElementById('converted_content').style.color = "green";
  }
  converted_content.innerHTML = usersTemp.value + " degrees Celsius = " + temp + " degrees Fahrenheit";
}


// function tempColor() {
//   console.log("tempColor function entered");
//   console.log("gRadioValue is :", gRadioValue);
//   if (gRadioValue === "celsius") {
//        console.log("tempColor>Celsius");
//   }
//   if (gRadioValue === "fahrenheit") {
//   if (temp > 90) {
//     document.getElementById("converted_content").style.color = "red";
//   }
//   else if (temp <32) {
//     document.getElementById('converted_content').style.color = "blue";
//   }
//   else {
//     document.getElementById('converted_content').style.color = "green";
//   }
//       }
// }

// Get a reference to the button element in the DOM
// var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
// function determineConverter (clickEvent) {
//   console.log("event", clickEvent);
// }

// Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);


