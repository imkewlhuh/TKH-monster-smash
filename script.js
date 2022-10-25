let playerName = prompt("What is your name?")

function randomNum(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

class Fighter {
  constructor(name) {
  this.name = name
  this.healthPoints = 15
  this.attackPoints = 0
  }
  attack(target) {
    this.attackPoints = randomNum(1, 6)
    target.healthPoints -= this.attackPoints
    alert(`${this.name} attacked ${target.name} for ${this.attackPoints} damage! ${target.name} has ${target.healthPoints} HP remaining.`)
  }
}

class Hero extends Fighter {
  constructor(name, healthPoints) {
    super(name, healthPoints)
    this.shield = 0
  }
  engageArmor() {
    this.healthPoints += 3
    alert(`${this.name}'s shield allows them to withstand 3 more damage!`)
  }
}

let player = new Hero(playerName)

class Monster extends Fighter {
  constructor(name, healthPoints) {
    super(name, healthPoints)
    this.charge = 0
  }
  enraged() {
    this.attackPoints = 7
    alert(`${this.name} is enraged! Their next attack will do 7 damage!`)
  }
  berserk(target) {
    target.healthPoints -= this.attackPoints
    alert(`${this.name} went berserk! They attacked ${target.name} for 7 damage! ${target.name} has ${target.healthPoints} HP remaining.`)
  }
}

let monster = new Monster('Ganondorf')

function playRound(player, monster) {
  let turn = randomNum(0, 2)
  if (turn === 0) {
    player.attack(monster)
    if (monster.healthPoints > 0) {
      if (monster.charge === 2) {
        monster.berserk(player)
        monster.charge = 0
      } else {
        monster.charge++
        monster.attack(player)
        if (monster.charge === 2) {
          monster.enraged()
        }
      }
    }
  } else {
    if (monster.charge === 2) {
      monster.berserk(player)
      monster.charge = 0
    } else {
      monster.attack(player)
    }
    if (player.healthPoints > 0) {
      player.shield++
      player.attack(monster)
      if (player.shield === 2) {
        player.engageArmor()
      }
    }
  } 
}

function playGame(player, monster) {
  alert(`Hello, ${player.name}! You are fighting ${monster.name}! Your health is at ${player.healthPoints}, ${monster.name}'s health is at ${monster.healthPoints}.`);
 let roundNumber = 0
  while(player.healthPoints > 0 && monster.healthPoints > 0) {
    roundNumber++
    alert(`It is round #${roundNumber}. ${player.name} has ${player.healthPoints} HP, ${monster.name} has ${monster.healthPoints} HP.`)
    playRound(player, monster)
  if (monster.healthPoints <= 0) {
    alert(`${monster.name} has no more HP remaining. ${player.name} wins! Congratulations.`)
  } else if (player.healthPoints <= 0) {
    alert(`${player.name} has no more HP remaining. ${monster.name} has vanquished you. The world is now doomed for eternal darkness. Thanks`)
  }
}
}

playGame(player, monster)