// 1. Prompt the user for password criteria
// password length 8-128
//upper and lower case



function generatePassword() {
 var length = window.prompt("Password length should be between 8-128 characters")
  console.log(length)

  if (length <8) {
    window.alert("Try again")

  } else if (length>128) {
    window.alert("Try again")
  } else {
   var uppercase = window.confirm ("Would you like uppercase to be included in your password?")
   console.log(uppercase)}

   var lowercase = window.confirm("Would you like lowercase to be included in your password?")
   console.log(lowercase)

   var symbols = window.confirm("Would you like symbols to be included in your password?")
   console.log(symbols)
   
   var number = window.confirm("Would you like numbers to be included in  your password?")
   console.log(number)

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
   }
  console.log(choosenstring)



  function writePassword(){
    var chars = "";
    var passwordLength = 12;
    var password = generateBtn;
    for (var i = 0; i <+ length; i++){
      var randomNumber= Math.floor(Math.floor() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
      console.log(randomNumber)
      
    }
  }
    function generateBtn(){
    document.querySelector("#generate")
    console.log(generateBtn)
  }

    
  
    function addEventListener(){
      generateBtn.addEventListener("click, writePassword");
      console.log(click)
    }
    
  

}
  









// Assignment code here


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword)
