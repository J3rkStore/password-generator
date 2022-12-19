// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// testing to see how to get javascript to do something if the button is clicked
document.getElementById("#generate").addEventListener("click", function () {
  alert("You clicked me");
});

alert("test alert");
document.write("please do something");
console.log("please");
