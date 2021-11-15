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
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
// prompt for lowercase characters
  var LowercaseCheck = confirm("Would you like to include lowercase characters?")
  if(LowercaseCheck) PasswordCharacters += lowercase;

// prompt for uppercase characters
  var UppercaseCheck = confirm("Would you like to include uppercase characters?")
  if(UppercaseCheck) PasswordCharacters += uppercase;

// prompt for numbers
  var NumberCheck = confirm("Would you like to include numbers?")
  if(NumberCheck) PasswordCharacters += numbers;

//prompt for special characters
  var SpecialCheck = confirm("Would you like to include special characters?")
  if(SpecialCheck) PasswordCharacters += special;

// checking for at least one character type
  if(PasswordCharacters.length == 0) {
    alert("You must choose at least one character type.")
  }

//generate password
  while(Password.length < PasswordLength) {
    Password += PasswordCharacters.charAt(Math.floor(Math.random() * PasswordCharacters.length));
  }
  return Password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
