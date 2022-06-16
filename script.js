var generateBtn = document.querySelector("#generate");
var isAnswer = true;
var specialCharacterArr ="!,@,#,$,%,^,&,*,(,)";
var lowerCaseArr = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,r,s,t,u,v,w,x,y,z";
var upperCaseArr = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,YZ";
var numbersArr =  "1234567890";


function generatePassword(){
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
     }
      
    


     

 
    var options ="";
    if(answer1){
      var options = options.concat(specialCharacterArr)
    }
    if(answer0){
      options = options.concat(numbersArr)
    }
    if(answer2){
      options = options.concat(upperCaseArr)
    }
    if(answer3){
      options = options.concat(lowerCaseArr)
    }
    var passwordLength = characterLength;
    var newPassword = "";
    for(var i = 0; i < passwordLength; i++){
            options = (Math.floor(Math.random()*options.length));
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

  

         

  

     
     
    
    




    
   
   
   
   
   
   
   
   

