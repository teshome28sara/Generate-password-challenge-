var generateBtn = document.querySelector("#generate");
var isAnswer = true;
var specialCharacterArr ="'!','@', '#', '$' , '%', '^', '&', '*',";
var lowerCaseArr = "'a', 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l', 'm' , 'n' , 'o' , 'p', 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'x' , 'y' , 'z'";
var upperCaseArr = "'A' , 'B', 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' , 'J' , 'K' , 'L' , 'M' , 'k' , 'l' , 'M' , 'N' , 'P', 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z'";
 var numbersArr =  "1234567890";


function generatePassword(){
   characterLength = parseInt(prompt("how many characters would you like for your password?(8 - 128 "));
  if(isNaN(characterLength ) || characterLength< 8 || characterLength > 128){
    alert("character  length must be a number, and must be 8 - 128, please try again");
   return false;;

  

      }
    else{
     var isNumbers =  confirm("would you like numbers in the password?")
    
    var isSymbols = confirm("would you like symbols in the password?");
    var isUpperCase = confirm("would you like uppercase letters in the password?");
    var isLowerCase = confirm("would you like lowercase letters in the password?");
    }
    if(isNumbers && isSymbols &&
      isUpperCase && isLowerCase !== isAnswer){
        alert(" must choose at least one character set ");
     return false;
     }
      
    


     

 
    var options ="";
    if(isSymbols){
      var options = options.concat(specialCharacterArr)
    }
    if(isNumbers){
      options = options.concat(numbersArr)
    }
    if(isUpperCase){
      options = options.concat(upperCaseArr)
    }
    if(isLowerCase){
      options = options.concat(lowerCaseArr)
    }
    var passwordLength = characterLength;
    var newPassword = "";
    for(var i = 0; i < passwordLength; i++){
            options = (Math.floor(Math.random()*newPassword.length));
            newPassword += options;
           }
         return newPassword;
        }
      
 

     function writePassword(){
              var password = generatePassword();
               var passwordText = document.querySelector("#password");
        
            passwordText.value = password
               
        
             }
             generateBtn.addEventListener('click', writePassword);

  

         

  

     