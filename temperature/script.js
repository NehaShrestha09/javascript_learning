//Temperature conversion

const numberBox = document.getElementById("numberBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const answer = document.getElementById("answer");
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(numberBox.value);
        temp = temp * 9 / 5 + 32;
        answer.textContent = temp.toFixed(1) + "°F";
    }else if(toCelsius.checked){
        temp = Number(numberBox.value);
        temp = 5 / 9 * (temp - 32);
        answer.textContent = temp.toFixed(1) + "°C";
    }else{
        answer.textContent = "Select a unit."
    }
}