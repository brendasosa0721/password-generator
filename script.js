// 1. Prompt the user for password criteria
// password length 8-128
//upper and lower case



function generatePassword() {
 var length = window.prompt("8 characters and no more than 128")
  console.log(length)

  if (length <8) {
    window.alert("Try again")

  } else if (length>128) {
    window.alert("Try again")
  } else {
   var uppercase = window.confirm ("uppercase")
   console.log(uppercase)

   var lowercase = window.confirm("lowercase")
   console.log(lowercase)

   var symbols = window.confirm("symbols")
   console.log(symbols)
   
   var number = window.confirm("number")
   console.log(number)

   var choosenstring = ("ZXCVBNMLKJHGFDSAQWERTYUIOP")
  }
}






// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
