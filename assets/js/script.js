// Assignment Code
var generateBtn = document.querySelector("#generate");


const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const upperCaseAlp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const special = '`!@#$%^&*()-_=+[]{};:<>?/\|'
let specialSplit = special.split("");


// Write password to the #password input
function generatePassword() {
  let length = window.prompt("How many characters would you like?")
  if (!length) {
    return;
  } else {
    length = Number(length);
    if (length < 8 || length > 128) {
      alert("Please select a length between 8 and 128 characters.");
      return;
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

    let password = []
    // while (password.length < length) {
    if (characters[0] === true) {
      let smallLetters = Math.floor(Math.random() * lower.length);
      password.push(lower[smallLetters]);
      console.log(password)

    }

  }
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





