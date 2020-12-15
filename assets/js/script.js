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
var password = "";

//Password generation function
function generatePassword() {
  password = "";
  var pwLength = prompt(
    "How many characters do you want? (At least 8 characters and no more than 128 characters)"
  );
  if (pwLength < 8 || pwLength > 128) {
    alert("You didn't select the proper range of characters");
    return generatePassword();
  } else {
    pwLowerCase = confirm("Do you want lowercase characters?");
    pwUpperCase = confirm("Do you want uppercase characters?");
    pwSpecial = confirm("Do you want special characters?");
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
      password += (lowerCase());
    }
    if (pwUpperCase === true) {
      password += (upperCase());
    }
    if (pwNumeric === true) {
      password += (numericCase());
    }
    if (pwSpecial === true) {
      password += (symbolCase());
    }
    password = password.slice(0, pwLength);
  }
  return password; // It took me a long time to get here. Tony was a big help, Tish you were a big help. This return is the holy grail.
} //end of generatePassword function

//Functions for character selection
function upperCase() {
  var singleChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
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
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);