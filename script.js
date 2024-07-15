// Assignment Code
var generateBtn = document.querySelector("#generate");

const charlowerCaseAbc = "abcdefghijklmnopqrstuvwxyz";
const charupperCaseAbc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// const charlowercasecharcode = arrayFromLowToHigh(97,122)
const charSpecial = "!@#$%^&*()<>{}[]=,.+_-"
const numeric = "0123456789"
//const charLength = passwordLength.val()



// //create prompt for passord length between 8-128 characteristics
// //creat prompts to confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// //input should be validated and at least one character type should be selected





  
function generatePassword() {
  var passwordLength = parseInt(prompt("How many characters would you like your password to be?")); 

  if(isNaN(passwordLength)) {
    alert("Sorry that input is invalid. Selection must be a number between 8 and 128. Please try again");
    return null;
  }

  if (passwordLength < 8 || passwordLength > 128){
    alert("Please choose a number between 8 and 128. Try again");
    return null;
 }


  var upperCaseChar = confirm ("Would you like to include an uppercase character?")
  var lowerCaseChar = confirm ("Would you like to include an lowercase character?")
  var numberChar = confirm ("Would you like to include a number?")
  var special = confirm("Would you like to include any special Characters?")

  if (lowerCaseChar===false && 
    upperCaseChar=== false && 
    numberChar ===false && 
    special===false ){
    alert("You must choose at least one type of character. Please start over.");
    return "";
  }

  let userChoice = "";
  let createPassword = "";

  userChoice += upperCaseChar ? charupperCaseAbc : "";
  userChoice += lowerCaseChar ? charlowerCaseAbc : "";
  userChoice += numberChar ? numeric : "";
  userChoice += special ? charSpecial : "";
  
  console.log (userChoice)

  for ( let i= 0; i < passwordLength; i++) {
    var randomChar = Math.floor(Math.random() * userChoice. passwordLength);
     createPassword+= userChoice [randomChar];
  }



}


  // var userChoice = {
  //   upperCaseChar: upperCaseChar,
  //   lowerCaseChar: lowerCaseChar,
  //   numberChar: numberChar,
  //     special: special
  // }
    

// //for example purpose
// // var results = [];
// // if(lowerCaseChar === true) {
// //   results.push(charlowercase)


// // function arrayFromLowToHigh (low,high){
// //   const array =[]
// //   for (let i = low; i<= high; i++) {
// //     array.push(i)
// //   }
// //   return array
    



  
  
//   //else if (){};

   

//   //lowerCaseChar=true


 
//    //else if ()
// //   return results.join('')
// }

// // Write password to the #password input
// //a password is generated that matches the selected criteria
// //the password is either displayed in an alert or written to the page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 

}




// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

//pseudocode
//create prompt for passord length between 8-128 characteristics
//creat prompts to confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//input should be validated and at least one character type should be selected
//a password is generated that matches the selected criteria
//the password is either displayed in an alert or written to the page
