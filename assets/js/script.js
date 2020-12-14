// Assignment Code
var generateBtn = document.querySelector("#generate");
const pwLettersArr = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
const pwLettersUpperArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
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
const pwNumericArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var pwLowerCase = "";
var pwUpperCase = "";
var pwSpecial = "";
var pwNumeric = "";

var passwordInput = [];

function generatePassword() {
  var pwLength = prompt(
    "How many characters do you want? (At least 8 characters and no more than 128 characters)"
  );
  if (pwLength < 8 || pwLength > 128) {
    alert("You didn't select the proper range of characters");
  } else {
    pwLowerCase = confirm("Do you want lowercase characters?");
    pwUpperCase = confirm("Do you want uppercase characters?");
    pwSpecial = confirm("Do you want special-characters?");
    pwNumeric = confirm("Do you want numbers?");
  }

  //What happens when you confirm these cases?
  if ((!pwLowerCase && !pwUpperCase && !pwSpecial && !pwNumeric) == true) {
    alert("At least one character type should be selected.");
  }
  //loop section
  for (var i = 0; i < pwLength; i) {
    if (pwLowerCase === true) {
      passwordInput += (lowerCase());
      i++;
    }
    if (pwUpperCase === true) {
      passwordInput += (upperCase());
      i++;
    }
    if (pwNumeric === true) {
      passwordInput += (numericCase());
      i++;
    }
    if (pwSpecial === true) {
      passwordInput += (symbolCase());
      i++;
    }
    passwordInput = passwordInput.slice(0, pwLength);
  }

}; //end of generatePassword function

//Functions for maths
function upperCase() {
  var singleChar = pwLettersUpperArr[Math.floor(Math.random() * pwLettersUpperArr.length)];
  return singleChar;
}

function lowerCase() {
  var singleChar = pwLettersArr[Math.floor(Math.random() * pwLettersArr.length)];
  return singleChar;
}

function symbolCase() {
  var singleChar = pwSpecialArr[Math.floor(Math.random() * pwSpecialArr.length)];
  return singleChar;
}

function numericCase() {
  var singleChar = pwNumericArr[Math.floor(Math.random() * pwNumericArr.length)];
  return singleChar;
}
// Write password to the #password input ***** must implement generatePassword function
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordInput;
  return;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);