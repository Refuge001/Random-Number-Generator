// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLength = prompt("How many characters do you want? (At least 8 characters and no more than 128 characters)");
var pwCharacterType = prompt("Do you want (l)owercase, (u)ppercase, (n)umeric, and/or (s)pecial-characters?");
var pwLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var pwSpecial = ["!", "@", "#", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "[", "{", "]", "}"]
//, "\", "|", ":", ";", ",", "<", ".", ">", "?"]
// input validation?

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
