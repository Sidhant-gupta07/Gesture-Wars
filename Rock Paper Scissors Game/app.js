let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");


const getCompChoice = () =>{
    // rock, paper & Scissors
    const options = ["Rock", "Paper", "Scissors"];
   const randIdx =  Math.floor(Math.random() * 3); 
    return options[randIdx]; 
};

const drawGame = () =>{
    console.log("Game was Draw!")
    msg.innerText = "Game was Draw, Try again!";
    msg.style.backgroundColor = "#081b31";
};

const playGame = (userChoice) => {
    const compChoice = getCompChoice();
    
    const showWinner = (userWin, userChoice, compChoice) => {
        if(userWin) {
            userScore++;
            userScorepara.innerText = userScore;
            console.log("Coungratulation's you win!");
            msg.innerText = `Coungratulation's You Win! Your${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
        } else  {
            compScore++;
            compScorePara.innerText = compScore;
            console.log("You Lose, Try again!");
            msg.innerText = `You Lose, Try again! ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";

        }
    }

    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            // Scissors, paper
            userWin = compChoice === "Paper" ? false : true;
        }else if (userChoice === "Paper") {
            // Scissors, rock 
            userWin = compChoice === "Scissors" ? false : true;
        }else {
            // rock, paper
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    }); 
}); 