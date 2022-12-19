// Assignment Code
var generateBtn = document.querySelector("#generate");

//defining function generatePassword before function writePassword
function generatePassword() {
  var result = "";
  var chars = "";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  //used all special characters referenced at https://owasp.org/www-community/password-special-characters but removed the space
  var specials = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var passLen = 8;
  //prompts to enter a length for password
  passLen = prompt(
    "How many characters would you like the password to have?  Please enter a number between 8 and 128"
  );
  //checks if passLen is, in fact, a number
  if (!Number(passLen)) {
    alert(
      "You did not input a number.  Your password will be 13 characters long"
    );
    passLen = 13;
  } else if (passLen > 128) {
    passLen = 128;
    alert("number too large, your password will have 128 characters");
  } else if (passLen < 8) {
    passLen = 8;
    alert("number too small.  Your password will have 8 characters.");
  } else {
    //shout out to VS code for showing me Template Strings
    alert(`Your password will have ${passLen} characters`);
  }
  // adds "ok" or "cancel" prompts to add criteria to a string which we will pull from to generate a password
  if (confirm("would you like lowercase letters in your password?")) {
    chars += letters;
  }
  if (confirm("would you like UPPER-CASE LETTERS in your password?")) {
    chars += letters.toUpperCase();
  }
  if (confirm("would you like numeric characters in your password?")) {
    chars += numbers;
  }
  if (confirm("would you like special characters in your password?")) {
    chars += specials;
  }
  if (chars == "") {
    chars += letters + numbers;
    alert(
      "since you didn't select any criteria, your password will contain lowercase letters and numbers"
    );
  }
  //adds random characters from the string "chars" to the "result", which will be our password
  for (var i = 0; i < passLen; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // passwordText variable changes the placeholder text in the document id "password"
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// testing to see how to get javascript to do something if the button is clicked
// use confirm (alert with ok and cancel button)
