//password length
//passowrd needs to have numbers, uppercase,lowercase,symbols


   // Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
// Write password to the #password input
function writePassword() {
  debugger;
  var correctPrompts = confirm();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
} else{
  passwordText.value = " ";
}
}
//generating a password session

function generatePassword() {
  var length = window.prompt("Password length should be between 8-128 characters")
   console.log(length)
 
   if (length <8) {
     window.alert("Please try again")
 
   } else if (length>128) {
     window.alert("Please try again")
   } else {
    var uppercase = window.confirm ("Would you like uppercase to be included in your password?")
    console.log(uppercase)
 
    var lowercase = window.confirm("Would you like lowercase to be included in your password?")
    console.log(lowercase)
 
    var symbols = window.confirm("Would you like symbols to be included in your password?")
    console.log(symbols)
    
    var number = window.confirm("Would you like numbers to be included in  your password?")
    console.log(number)
   }
    var choosenstring = ""  
    if (uppercase===true){
     choosenstring+= "ZXCVBNMLKJHGFDSAQWERTYUIOP"
    }
 
    if(lowercase===true){
     choosenstring+= "zxcvbnmlkjhgfdsaqwrtyuiop"
    }
    if (number===true) {
     choosenstring+= "1234567890"
    }
    if (symbols===true){
     choosenstring+= "!@#$%^&*()_+"
     console.log(choosenstring)
    }
  
    var password = "";
    for(var i = 0; i <length; i++) {
      var randomIndex = Math.floor(Math.random() * length);
      password = password + choosenstring[randomIndex];
    }
    return password;
  }

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }



