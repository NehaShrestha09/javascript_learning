//Random Password Generator

function passwordGenerator(passwordLength,includeLowerCase, includeUpperCase,includeNumber,includeSymbols){
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_-+={}[];.,";
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumber ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(passwordLength<=0){
        return `(The password length should be atleast 1.)`;
    }
    if(allowedChars.length === 0){
        return `(At least one set of characters should be selected.)`;
    }
    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 16;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumber = true;
const includeSymbols = true;

const password = passwordGenerator(passwordLength,includeLowerCase, includeUpperCase,includeNumber,includeSymbols);
console.log(`Generated Password : ${password}`);