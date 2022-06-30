// Prompt the user for password criteria
// password length 8-128
//upper and lower case symbols and character


////////////////////////

///////////////////////

// Assignment code here

// Generate Password with the character below

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
  
  }
  

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
 function writePassword() {
  var correctPrompts = getPrompts(); // true or false

  if(correctPrompts){
    var password = generatePassword();
  }  else {
    passwordText = "";
  }
  
  function generatePassword(){
    // I would generatePassword based on the prommpts
     var passwordLength = "";
    for( var i = 0; i < generatePassword; i++){
      var randomIndex =Math.floor(Math.random() * choosenstring);
      password = password + choosenstring[randomIndex]
  
      return password;
    }
    
  
   }
  var password = generatePassword();
   var passwordText = document.querySelector("#password");
   passwordText.value = password;
  

 function getPrompts(){
  choosenstring = [];
 }
}
