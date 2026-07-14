const moveCount=document.getElementById("move-count");
const restartBtn=document.getElementById("restart-btn");
const gameBoard=document.getElementById("game-board");

const emojis = ["🍎","🍌","🍇","🍓","🍊","🍒","🥝","🍍"];
let cards=[...emojis,...emojis];

let firstCard=null;
let secondCard=null;
let lockBoard=false;
let moves=0;

function shuffleCards(array){
    array.sort(()=>Math.random()-0.5);
}

function createBoard(){
    gameBoard.innerHTML="";
    shuffleCards(cards);

    [firstCard,secondCard,lockBoard] = [null,null,false];
    moves=0;
    moveCount.textContent=moves;

    cards.forEach((emojis)=>{
        const card=document.createElement("div");
        card.classList.add("card");
        card.dataset.emojis=emojis;
        //card.textcontent="";
        card.innerHTML=`
        <div class="card-inner">
            <div class="card-front"></div>
            <div class="card-back">${emojis}</div>
        </div>`;
        card.addEventListener("click",flipCard);
        gameBoard.appendChild(card);
    });
}

restartBtn.addEventListener("click",createBoard);

function flipCard(){
    if(lockBoard) return;
    if(this===firstCard) return;
    if(this.classList.contains("matched")) return;
    if(this.classList.contains("flipped")) return;

    this.classList.add("flipped");
    //this.textContent=this.dataset.emojis;

    if(!firstCard){
        firstCard=this;
        return;
    }
    secondCard=this;
    moves++;
    moveCount.textContent=moves;

    checkForMatch();
}

function checkForMatch(){
    if(firstCard.dataset.emojis===secondCard.dataset.emojis){
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");

        function checkForWin(){
            const matchedCards=document.querySelectorAll(".card.matched");
            if(matchedCards.length===cards.length){
                setTimeout(()=>alert(`You won in ${moves} moves!`),300);
            }
        }
        checkForWin();
        resetTurn();
    }else{
        lockBoard=true;
        setTimeout(()=>{
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            //firstCard.textContent="";
            //secondCard.textContent="";
            resetTurn();
        },800);
    }
}

function resetTurn(){
    [firstCard,secondCard,lockBoard]=[null,null,false];
}

createBoard();