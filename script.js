/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

const totalScore={computer:0,playerScore:0}

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **

function getComputerChoice() {
   const rpsChoice=["Rock","Paper","Scissors"]
   const randomNumber=Math.floor(Math.random()*3);
   return rpsChoice[randomNumber];
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **

function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  
  let score;

  // All situations where human draws, set `score` to 0
  if(playerChoice == computerChoice)
  {
    score = 0;
  }
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  else if(playerChoice==="Rock" && computerChoice==="Scissor")
  {
    score=1;
  }
  else if(playerChoice==="Paper" && computerChoice==="Rock")
  {
    score=1;
  }
  else if(playerChoice==="Scissors" && computerChoice==="Paper")
  {
    score=1;
  }

  // Otherwise human loses (aka set score to -1)
  else
  {
    score=-1;
  }

  // return score
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {

    const playerScoreDiv= document.getElementById("player-score");
    const handsDiv= document.getElementById("hands");
    const resultDiv= document.getElementById("result");
   if(score==-1)
   {
    resultDiv.innerText="You Lost"
    playerScoreDiv.innerText = "Score = -1"
   }
   else if(score==0)
   {
    resultDiv.innerText="Game Draw"
    playerScoreDiv.innerText = "Score = 0"
   }
   else
   {
    resultDiv.innerText="You Won!!"
    playerScoreDiv.innerText = "Score = 1"
   }

   handsDiv.innerText=`🧑${playerChoice} vs 🤖${computerChoice}`
 
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({playerChoice})
  const computer=getComputerChoice();
  console.log({computer})
  const score = getResult(playerChoice, computer) 
  totalScore['playerScore'] +=score;
  
    console.log({score})
    console.log(totalScore)
    showResult(score,playerChoice,computer)

}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
 const rpsbuttons=document.querySelectorAll(".rpsButton")

 rpsbuttons.forEach(rps=>{
    rps.onclick=()=>
       onClickRPS(rps.value);
    
   })
 
  
  // Add a click listener to the end game button that runs the endGame() function on click
  
  const reset =document.querySelector("#endGameButton")
  reset.onclick=()=>endGame();
}

// ** endGame function clears all the text on the DOM **
function endGame() {
    const playerScoreDiv= document.getElementById("player-score");
    const handsDiv= document.getElementById("hands");
    const resultDiv= document.getElementById("result");

    resultDiv.innerText=''
    handsDiv.innerText=''
    playerScoreDiv.innerText=''

}

playGame()
