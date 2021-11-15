// Assignment Code
var generateBtn = document.querySelector("#generate");

 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if(!password) return

  passwordText.value = password;

}

// added variables for each password parameter
var lowercase ="abcdefghijklmnopqrstuvwxyz";
var upppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "~`!@#$%^&*()-_=+[]{};'|:,./<>?";

function generatePassword() {
  var PasswordCharacters = "";
  var Password = "";
  var PasswordLength = prompt("Please choose the length of your password (8-128 characters).");
  if(!PasswordLength) return




}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
