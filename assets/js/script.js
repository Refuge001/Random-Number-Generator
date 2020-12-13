// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLetters = [
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
var pwSpecial = [
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


function generatePassword() {

  var pwLength = prompt("How many characters do you want? (At least 8 characters and no more than 128 characters)");
  if (pwLength < 8 || pwLength > 128) {
    alert("You didn't select the proper range of characters");
  } else {
    var pwLowerCase = confirm("Do you want lowercase characters?");
    var pwUpperCase = confirm("Do you want uppercase characters?");
    var pwSpecial = confirm("Do you want special-characters?");
    var pwNumeric = confirm("Do you want numbers?");
  };
  //What happens when you confirm these cases?
  if ((pwLowerCase && pwUpperCase && pwSpecial && pwNumeric) == false) {
    alert("At least one character type should be selected.");
  }

  // ... all

  else if (pwUpperCase && pwSpecial && pwNumeric && pwLowerCase === true) {

  }

  // ... 3

  else if (pwLowerCase && pwUpperCase && pwSpecial === true) {

  }

  else if (pwLowerCase && pwUpperCase && pwNumeric === true) {

  }

  else if (pwLowerCase && pwNumeric && pwSpecial == true) {

  }

  else if (pwUpperCase && pwSpecial && pwNumeric === true) {

  }

  // ... 2

  else if (pwLowerCase && pwUpperCase === true) {

  }

  else if (pwLowerCase && pwSpecial === true) {

  }

  else if (pwUpperCase && pwSpecial === true) {

  }

  else if (pwLowerCase && pwNumeric === true) {

  }

  else if (pwUpperCase && pwNumeric === true) {

  }

  else if (pwSpecial && pwNumeric === true) {

  }

  // ... 1

  else if (pwLowerCase === true) {
    alert("LowerCase true")
  }

  else if (pwUpperCase === true) {

  }

  else if (pwSpecial === true) {

  }

  else if (pwNumeric === true) {
    alert("pwNumeric true")
  }

}; //end of generatePassword function

//loop section
//for (var i = 0; i < pwLength; i++) {
//looping through arrays with password choices
//};

// Write password to the #password input ***** must implement generatePassword function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
