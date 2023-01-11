// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays for character options
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseAlp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const special = '`!@#$%^&*()-_=+[]{};:<>?/\|'
// converts special string to individual characters
const specialSplit = special.split("");


// Write password to the #password input
function generatePassword() {
  // prompt to set password length
  let length = window.prompt("How many characters would you like?")
  // if user hits cancel return
  if (!length) {
    return;
    // if user provides a number string
  } else {
    // converts string to number
    length = Number(length);
    // validation for password length 
    if (length < 8 || length > 128) {
      alert("Please select a length between 8 and 128 characters.");
      // returns out of function to start over
      return;
    }
    // user provides password requirements \
    // initializes characters array for later validation
    let characters = []
    // prompt for lowercase requirements 
    let lowerCase = window.confirm("Do you want to add lowercase characters?")
    // pushes boolean value to characters array for later validation
    characters.push(lowerCase)
    // prompt for uppercase 
    let upperCase = window.confirm("Do you want to add uppercase characters?")
    // pushes boolean value to characters array for later validation
    characters.push(upperCase)
    // prompt for numeric
    let numeric = window.confirm("Do you want to add numeric characters?")
    // pushes boolean value to characters array for later validation
    characters.push(numeric)
    // prompt for special characters
    let specialCharacters = window.confirm("Do you want to add special characters?")
    // pushes boolean value to characters array for later validation
    characters.push(specialCharacters)
    // validation that at least one character option is selected
    if (!characters.includes(true)) {
      // alerts if characters array does not have at lease one true value
      window.alert("You must select at least one character option.");
      // returns out so user may start over 
      return;
    }
    // setting password value to makePassword() results 
    password = makePassword(length, lowerCase, upperCase, numeric, specialCharacters);

    // function to add characters to password based on criteria given 
    function makePassword(length, lowerCase, upperCase, numeric, specialCharacters) {
      // initializes array for password characters bases on criteria
      let passwordArray = []
      // if prompt passed a true value concat onto password array
      if (lowerCase) {
        passwordArray = passwordArray.concat(lower)
      } if (upperCase) {
        passwordArray = passwordArray.concat(upperCaseAlp)
      } if (numeric) {
        passwordArray = passwordArray.concat(integers)
      } if (specialCharacters) {
        passwordArray = passwordArray.concat(specialSplit)
      };
      // initializes array for password characters after random pick
      const passwordCharacters = [];
      // for loop to push random selection from passwordArray to passwordCharacters array up to given password length
      for (let i = 0; i < length; i++) {
        // initializes character to = random index from concat passwordArray
        const character = passwordArray[Math.floor(Math.random() * passwordArray.length)]
        passwordCharacters.push(character)
      }
      // returns a string from passwordCharacters array 
      return passwordCharacters.join("");
    }
    console.log(password)
    // returns the password variable to be used in writePassword()
    return password
  }
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





