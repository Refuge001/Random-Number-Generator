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
];
//, "\", "|", ":", ";", ",", "<", ".", ">", "?"]
const pwNumericArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var pwLowerCase = "";
var pwUpperCase = "";
var pwSpecial = "";
var pwNumeric = "";

var userChoice = "";

var password = "";

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

  // ... all
  else if ((pwUpperCase && pwSpecial && pwNumeric && pwLowerCase) === true) {
    alert("all are true");
  }

  // ... 3
  else if (pwLowerCase && pwUpperCase && pwSpecial === true) {
    userChoice = "";
  } else if (pwLowerCase && pwUpperCase && pwNumeric === true) {
    userChoice = "";
  } else if (pwLowerCase && pwNumeric && pwSpecial == true) {
    userChoice = "";
  } else if (pwUpperCase && pwSpecial && pwNumeric === true) {
    userChoice = "";
  }

  // ... 2
  else if (pwLowerCase && pwUpperCase === true) {
    userChoice = "";
  } else if (pwLowerCase && pwSpecial === true) {
    userChoice = "";
  } else if (pwUpperCase && pwSpecial === true) {
    userChoice = "";
  } else if (pwLowerCase && pwNumeric === true) {
    userChoice = "";
  } else if (pwUpperCase && pwNumeric === true) {
    userChoice = "";
  } else if (pwSpecial && pwNumeric === true) {
    userChoice = "";
  }

  // ... 1
  else if (pwLowerCase === true) {
    function lowerCase() {
      return pwLettersArr[Math.floor(Math.random() * pwLength)];
    }
    console.log(lowerCase);
  } else if (pwUpperCase === true) {
    function upperCase() {
      return pwLettersUpperArr[Math.floor(Math.random() * pwLength)];
    }
    console.log(upperCase);
  } else if (pwSpecial === true) {
    function symbolCase() {
      return pwSpecialArr[Math.floor(Math.random() * pwLength)];
    }
    console.log(symbolCase);
  } else if (pwNumeric === true) {
    alert("pwNumeric true");

    function numericCase() {
      return pwNumericArr[Math.floor(Math.random() * pwLength)];
    }
    console.log(numericCase);
  }
} //end of generatePassword function

//loop section
//for (var i = 0; i < pwLength; i++) {
//looping through arrays with password choices, and then saves value to password var
// (variable.join('')), maybe
//};

// Write password to the #password input ***** must implement generatePassword function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
