// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays
const pwSpecialArr = [
  "!",
  "@",
  "#",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "=",
  "+",
  "[",
  "{",
  "]",
  "}",
  "\\",
  "\|",
  "\:",
  "\;",
  "\,",
  "\<",
  "\.",
  "\>",
  "\?"
];
//Variables
var pwLowerCase = "";
var pwUpperCase = "";
var pwSpecial = "";
var pwNumeric = "";
var passwordInput = "";

//Password generation function
function generatePassword() {
  passwordInput = "";
  var pwLength = prompt(
    "How many characters do you want? (At least 8 characters and no more than 128 characters)"
  );
  if (pwLength < 8 || pwLength > 128) {
    alert("You didn't select the proper range of characters");
    return generatePassword();
  } else {
    pwLowerCase = confirm("Do you want lowercase characters?");
    pwUpperCase = confirm("Do you want uppercase characters?");
    pwSpecial = confirm("Do you want special-characters?");
    pwNumeric = confirm("Do you want numbers?");
  }

  //Alert if all options bypassed
  if ((!pwLowerCase && !pwUpperCase && !pwSpecial && !pwNumeric) == true) {
    alert("At least one character type should be selected.");
    return generatePassword();
  }
  //loop section
  for (var i = 0; i < pwLength; i++) {
    if (pwLowerCase === true) {
      passwordInput += (lowerCase());
    }
    if (pwUpperCase === true) {
      passwordInput += (upperCase());
    }
    if (pwNumeric === true) {
      passwordInput += (numericCase());
    }
    if (pwSpecial === true) {
      passwordInput += (symbolCase());
    }
    passwordInput = passwordInput.slice(0, pwLength);
  }
  return passwordInput;
} //end of generatePassword function

//Functions for character selection
function upperCase() {
  var singleChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);;
  return singleChar;
}

function lowerCase() {
  var singleChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  return singleChar;
}

function symbolCase() {
  var singleChar = pwSpecialArr[Math.floor(Math.random() * pwSpecialArr.length)];
  return singleChar;
}

function numericCase() {
  var singleChar = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  return singleChar;
}
// Write password to the #password input ***** must implement generatePassword function
function writePassword() {
  passwordInput = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordInput;
  return;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);