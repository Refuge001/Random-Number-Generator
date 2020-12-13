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

var pwLength = prompt(
  "How many characters do you want? (At least 8 characters and no more than 128 characters)");
if (pwLength < 8 || pwLength > 128) {
  alert("You didn't select the proper range of characters");
} else {
  var pwLowerCase = confirm("Do you want lowercase characters?");
  var pwUpperCase = confirm("Do you want uppercase characters?");
  var pwSpecial = confirm("Do you want special-characters?");
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
