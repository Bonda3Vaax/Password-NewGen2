// Declaring variables

var passwordLenght = 8;
var storePasswordArray = [];

var numberArray = ['1','2','3','4','5','6','7','7','9','0'];
var specialCharacterArray = ['`','~','!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}','|',';',':','<','>','/','?'];
var lowerCharacterArray = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var upperCharacterArray = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];

// Show prompts function
function showPrompts() {
  passwordLenght = parseInt(prompt("Choose a password length of at least 8 characters and no more than 128 characters!"))

  if (isNaN(passwordLenght) || passwordLenght < 8 || passwordLenght > 128) {
    alert("Please choose a password length of at least 8 characters and no more than 128 characters!!")
    return false;}

  if (confirm("Keen to add lowerCharacter ?")) {
    storePasswordArray = storePasswordArray.concat(lowerCharacterArray);
  }
  if (confirm("Keen to add upperCharacter ?")) {
    storePasswordArray = storePasswordArray.concat(upperCharacterArray);
  }
  if (confirm("Keen to add specialCharacter ?")) {
    storePasswordArray = storePasswordArray.concat(specialCharacterArray);
  }
  if (confirm("Keen to add numberCharacter ?")) {
    storePasswordArray = storePasswordArray.concat(numberArray);
  }
  return true;
} 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generates password function
function generatePassword() {
  var newPassword = "";
  for(var i = 0; i < passwordLenght; i++) {
    var newInput = Math.floor(Math.random() * storePasswordArray.length);
    newPassword = newPassword + storePasswordArray[newInput];
  }
  return newPassword;

}

// Write password to the #password input
function writePassword() {
  var rightPrompts = showPrompts();
  var passwordText = document.querySelector("#password");
  if (rightPrompts) {
    var password = generatePassword();
    passwordText.value = password 
  }
  else {
    passwordText.value = "";
  }
}


















