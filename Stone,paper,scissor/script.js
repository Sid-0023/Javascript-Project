window.onload = function () {
  document.getElementById("winner-gif").classList.add("hidden");
};
let score = 0;
let compScore = 0;

function handleClick(event) {
  let choices = ["stone", "paper", "scissors"];
  let playerChoice = event.target.id;
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const userChoiceDisplay = document.getElementById("user-choice");
  const computerChoiceDisplay = document.getElementById("computer-choice");
  const outcomeDisplay = document.getElementById("outcome");
  const userScoreDisplay = document.getElementById("user-score");
  const compScoreDisplay = document.getElementById("computer-score");

  userChoiceDisplay.textContent = `Your Choice: ${playerChoice}`;
  computerChoiceDisplay.textContent = `Computer's Choice: ${computerChoice}`;

  if (playerChoice === computerChoice) {
    outcomeDisplay.textContent = `It's a Tie!`;
  } else if (
    (playerChoice === "stone" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "stone")
  ) 
  {
    outcomeDisplay.textContent = `You Win! 🏆`;
    score++;
    userScoreDisplay.textContent = `Your Score: ${score}`;
  } 
  else
   {
    outcomeDisplay.textContent = `You Lose! 😭`;
     compScore++;
     compScoreDisplay.textContent = `Computer Score:${compScore} `;
    }

  if (score === 10) 
    {
    const winnerGif = document.getElementById("winner-gif");
    winnerGif.style.display = "block";
    } 
  else if (compScore === 10) 
    {
    const loserGif = document.getElementById("loser-gif");
    loserGif.style.display = "block";
  }
}
document.getElementById("close-winner-gif").addEventListener("click", function () {
    const winnerGif = document.getElementById("winner-gif");
    winnerGif.style.display = "none";
  });
document.getElementById("close-loser-gif").addEventListener("click", function () {
const loserGif = document.getElementById("loser-gif");
loserGif.style.display = "none";
  });
const buttons = document.querySelectorAll(".choice");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
