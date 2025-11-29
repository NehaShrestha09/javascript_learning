//Number Count

// const decreaseBtn=document.getElementById("decreaseBtn");
// const increaseBtn=document.getElementById("increaseBtn");
// const resetBtn=document.getElementById("resetBtn");
// const countLabel=document.getElementById("countLabel");
// let count=0;

// decreaseBtn.onclick=function(){
//     count--;
//     countLabel.textContent=count;
// }

// increaseBtn.onclick=function(){
//     count++;
//     countLabel.textContent=count;
// }

// resetBtn.onclick=function(){
//     count=0;
//     countLabel.textContent=count;
// }

//-----------------------***-------------------------
//Random number generator

// const btn=document.getElementById("btn");
// const label=document.getElementById("label");
// const min=1;
// const max=6;
// let randomNumber;

// btn.onclick=function(){
//     randomNumber=Math.floor(Math.random()*max)+1;
//     label.textContent=randomNumber;
// }

// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const paypalBtn = document.getElementById("paypalBtn");
// const myBtn = document.getElementById("myBtn");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// myBtn.onclick = function(){
//     if (myCheckBox.checked) {
//         subResult.textContent = `You are subscribed!`;
//         if(visaBtn.checked){
//             paymentResult.textContent = `You are paying with Visa.`;
//         }else if(masterCardBtn.checked){
//             paymentResult.textContent = `You are paying with Master Card.`;
//         }else if(paypalBtn.checked){
//             paymentResult.textContent = `You are paying with PayPal.`;
//         }else{
//             paymentResult.textContent = `You must select a payment method.`;
//         }
//     }else{
//         subResult.textContent = `You are not subscribed!!`;
//     }
// }



//Number Guessing Game

const min = 50;
const max = 200;
const answer = Math.floor(Math.random()*(max-min+1))+min;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${min} - ${max}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("You must enter a valid number.");
    }else if(guess<min || guess>max){
        window.alert("You must enter a valid number.");
    }else{
        attempts++;
        if(guess<answer){
            window.alert("The number is too low.");
        }else if(guess>answer){
            window.alert("The number is too high.");
        }else{
            window.alert(`Congratulations! ${guess} is the correct answer. It took you ${attempts} attempts.`);
            running = false;
        }
    }
}