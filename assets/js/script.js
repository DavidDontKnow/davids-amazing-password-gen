// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  let length = window.prompt("How many characters would you like?")
  length = Number(length);
  if (length < 8 || length > 128) {
    alert("Please select a length between 8 and 128 characters.")
  }
  let characters = []
  let lowerCase = window.confirm("Do you want to add lowercase characters?")
  characters.push(lowerCase)
  let upperCase = window.confirm("Do you want to add uppercase characters?")
  characters.push(upperCase)
  let numeric = window.confirm("Do you want to add numeric characters?")
  characters.push(numeric)
  let specialCharacters = window.confirm("Do you want to add special characters?")
  characters.push(specialCharacters)
  if (!characters.includes(true)) {
    window.alert("You must select at least one character option.")
  }


}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
