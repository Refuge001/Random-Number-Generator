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

if (pwLowerCase === true) {
  alert("LowerCase true")
}

if (pwUpperCase === true) {

}

if (pwSpecial === true) {

}

if (pwNumeric === true) {

}

// ... 2

if (pwLowerCase && pwUpperCase === true) {

}

if (pwLowerCase && pwSpecial === true) {

}

if (pwUpperCase && pwSpecial === true) {

}

if (pwLowerCase && pwNumeric === true) {

}

if (pwUpperCase && pwNumeric === true) {

}

if (pwSpecial && pwNumeric === true) {

}

// ... 3

if (pwLowerCase && pwUpperCase && pwSpecial === true) {

}

if (pwLowerCase && pwUpperCase && pwNumeric === true) {

}

if (pwLowerCase && pwNumeric && pwSpecial == true) {

}

if (pwUpperCase && pwSpecial && pwNumeric === true) {

}

// ... all

if (pwUpperCase && pwSpecial && pwNumeric && pwLowerCase === true) {

}

//loop section
for (var i = 0; i < pwLength; i++) {
  //looping through arrays with password choices
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
