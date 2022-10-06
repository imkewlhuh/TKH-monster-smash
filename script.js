//global variables, can be accessed by all functions

  //declare a variable named playerName that stores the value the player enters from a prompt
let playerName = prompt("What is your name?")
  //declare a variable named playerHealth and set it equal to the number value 15
let playerHealth = 15
  //assign a name of a monster (ex 'Werewolf') as a string to a variable named monsterName
let monsterName = 'Ccapac Apu'
  //declare a variable named monsterHealth and set it equal to the number value 15
let monsterHealth = 15
//random integer function 
//see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomNum(min, max) {
  //return a random integer between min - max
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

function playerAttack(){
//use randomNum to generate attack points value between 1 - 5 and save the value to a variable named playerAttackPoints
let playerAttackPoints = randomNum(1, 6)
//subtract playerAttackPoints from monsterHealth and update the monsterHealth variable
monsterHealth = monsterHealth - playerAttackPoints
alert(`${playerName} attacked ${monsterName}. You did ${playerAttackPoints} damage! The monster has ${monsterHealth} HP left.`)
  //use an alert with string template literals to tell the player: 
  // 1. player attacked monster 
  // 2. how much damage the player did 
  // 3. how much health the monster has 
}

function monsterAttack(){
  //use randomNum to generate attack points value between 1 - 5 and save the value to a variable named monsterAttackPoints
let monsterAttackPoints = randomNum(1, 6)
  //subtract monsterAttackPoints from playerHealth and update the playerHealth variable 
playerHealth = playerHealth - monsterAttackPoints
alert(`${monsterName} attacked ${playerName}. ${monsterName} did ${monsterAttackPoints} damage! ${playerName} has ${playerHealth} HP left.`)
  //use an alert with string template literals to tell the player: 
  // 1. monster attacked player 
  // 2. how much damage the monster did 
  // 3. how much health the player has 
}

function playRound() {
  //use randomNum to return either 0 or 1
  let turn = randomNum(0, 2)
  //0 = player goes first, 1 = monster goes first
  if (turn === 0) {
    playerAttack()
    if (monsterHealth > 0) {
      monsterAttack()
    }
  } else {
    monsterAttack()
    if (playerHealth > 0) {
      playerAttack()
    }
  }
  //use if/else to determine who goes first
  
  //if player goes first, run playerAttack, then if monsterHealth > 0, run monsterAttack

  //if monster goes first, run monsterAttack, then if playerHealth > 0, run playerAttack 
}

function playGame() {
  //beginning game message
  alert(
    `Hello, ${playerName}! You are fighting ${monsterName}! Your health is at ${playerHealth}, ${monsterName}'s health is at ${monsterHealth}.`
  );

 let roundNumber = 0

  //while loop that runs until player or monster's health is <= 0 
  //add the condition in the while loop parentheses 
  while(playerHealth > 0 && monsterHealth > 0) {
    roundNumber++
   //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
    alert(`It is round #${roundNumber}. ${playerName} has ${playerHealth} HP, ${monsterName} has ${monsterHealth} HP.`)
   //call playRound inside the while loop
    playRound()
  } 
  if (monsterHealth <= 0) {
    alert(`${monsterName} has no more HP remaining. ${playerName} wins! Congratulations.`)
  } else if (playerHealth <= 0) {
    alert(`${playerName} has no more HP remaining. ${monsterName} has vanquished you. The world is now doomed for eternal darkness. Thanks`)
  }
  //outside of while loop, declare a winner and use alert to show a win or lose message 
}

//call playGame to start game
playGame()