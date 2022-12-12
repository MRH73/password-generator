const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.querySelector("#password1")
let password2 = document.querySelector("#password2")

let generateBtn = document.querySelector("generateBtn")

let passwordC = " "
let passwordC2 = " "

function getCharacter(){
    let randomCharacter = Math.floor(Math.random()*91)
    return characters[randomCharacter]
}



function generatePassword(){
    
    passwordC = " "
    passwordC2 = " "
    
    for (i = 0 ; i < 15 ; i++){
        let character = getCharacter()
        passwordC += character
    }
    for (i = 0 ; i < 15 ; i++){
        let character2 = getCharacter()
        passwordC2 += character2
    }
    password1.textContent = passwordC
    password2.textContent = passwordC2
}




