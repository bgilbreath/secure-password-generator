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

function generatePassword(){
  var char = "";
  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChar = "0123456789";
  var specialChar = "!@#$%^&*()";
  var length = prompt("How long would you like your password? Password must be between 8-128 characters.");
    length = parseInt(length);
    if (length < 8){
      alert("Password must be longer than 7 characters.");
      return ""
    };
    if (length > 128){
      alert("Password must be shorter than 129 characters.");
      return ""
    };
  var lower = confirm("Would you like to use lowercase characters?");
    if (lower) {
    char += lowerChar
    };
  var upper = confirm("Would you like to use uppercase characters?");
    if (upper) {
      char += upperChar
    };
  var numbers = confirm("Would you like to use numbers?");
    if (numbers) {
      char += numberChar
    };
  var specialChoice = confirm("Would you like to use special characters?");
    if (specialChoice) {
      char += specialChar
    };
  var password = "";
  for (var i = 0; i < length; i++){
    password += char[Math.floor(Math.random() * char.length)];
  };
  return password;
  
  document.getElementById("password").value = password;
};

