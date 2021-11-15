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
var special = "~`!@#$%^&*()-_=+[]{};'|:,./<>?";

// added generate password funtion with length prompt 
function generatePassword() {
  var PasswordCharacters = "";
  var Password = "";
  var PasswordLength = prompt("Please choose the length of your password (8-128 characters).");
  if(!PasswordLength) return

// making sure a number was entered in the prompt
  if(isNaN(PasswordLength)) {
    alert("Please enter a number only.")
    return
  }
// making sure password is at least 8 characters
  if(PasswordLength < 8) {
    alert("Password must be at least 8 characters.")
    return
  }
// making sure password is no more than 128 characters
  if(PasswordLength > 128) {
    alert("Password can be no more than 128 characters.")
    return
  }



}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
