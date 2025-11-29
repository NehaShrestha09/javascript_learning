//Dice Roller Program

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const total = document.getElementById("total");
    const values = [];
    const images = [];
    let sum = 0;

    for(let i = 0; i<numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        sum+=value;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`);
    }
    diceResult.textContent = `Dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
    total.textContent = `Total: ${sum}`;
}