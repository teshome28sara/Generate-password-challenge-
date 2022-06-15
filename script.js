var generateBtn = document.querySelector("#generate");
var isAnswer = true;


generateBtn.addEventListener("click" , () => {
  characterLength = parseInt(prompt("how many characters would you like for your password?(8 - 128 "));
  if(isNaN(characterLength ) || characterLength< 8 || characterLength > 128){
    alert("character  length must be a number, and must be 8 - 128, please try again");
   return false;;

  

      }
    else{
     var answer0 =  confirm("would you like numbers in the password?")
    
    var answer1 = confirm("would you like symbols in the password?");
    var answer2 = confirm("would you like uppercase letters in the password?");
    var answer3 = confirm("would you like lowercase letters in the password?");
    }
    if(answer0 && answer1 &&
      answer2 && answer3 !== isAnswer){
        alert(" must choose at least one character set ");
     return false;
    }else{
      return true;
      
     
  }     
    


});


var specialCharacterArr = ["!", "@", "#", "$", "%", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+"];
 var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
 var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
 var numbersArr =  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
 

// declare an empty array
function generatePassword(){
 var characters = "";
  var choiceArr = [];
  if(specialCharacterArr){
    choiceArr = choiceArr.concat(specialCharacterArr);

  }if(lowerCaseArr){
    choiceArr = choiceArr.concat(lowerCaseArr);
  }if(upperCaseArr){
    choiceArr = choiceArr.concat(upperCaseArr);
  }if(numbersArr){
    choiceArr = choiceArr.concat(numbersArr);
  }
  for(var i = 0; i < characters; i++){
    choiceArr(math.floor(math.random)) *choiceArr.length;
 choiceArr += characters
 
  

  }
  alert("hello");
  


}











// // Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;
   
 

 }

