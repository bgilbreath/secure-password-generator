// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate Random Password 
function generatePassword(){
  //Defines what characters will be used
  var char = "";
  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChar = "0123456789";
  var specialChar = "!@#$%^&*()";
  //Prompt to ask user for length of generated password
  var length = prompt("How long would you like your password? Password must be between 8-128 characters.");
    if (length < 8){
      alert("Password length must be between 8 and 128.");
      return ""
    };
    if (length > 128){
      alert("Password length must be between 8 and 128.");
      return ""
    };
    //Prompt to confirm use of lowercase characters in generated password
  var lower = confirm("Would you like to use lowercase characters?");
    if (lower) {
    char += lowerChar
    };
    //Prompt to confirm use of uppercase characters in generated password
  var upper = confirm("Would you like to use uppercase characters?");
    if (upper) {
      char += upperChar
    };
    //Prompt to confirm use of numbers in generated password
  var numbers = confirm("Would you like to use numbers?");
    if (numbers) {
      char += numberChar
    };
    //Prompt to confirm use of special characters in generated password
  var specialChoice = confirm("Would you like to use special characters?");
    if (specialChoice) {
      char += specialChar
    };
    //Loop to generate password
  var password = "";
  for (var i = 0; i < length; i++){
    password += char[Math.floor(Math.random() * char.length)];
  };
  return password;
};

