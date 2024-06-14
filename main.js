const prompt = require('prompt-sync')()

const attacks = [
    {
        name: " Frappe rapide",
        power: 10,
        precision: 1
    },
    {
        name: " Soin Léger",
        power: -15,
        precision: 2
    },
    {
        name: " Coup puissant",
        power: 20,
        precision: 2
    },
    {
        name: " Frappe dévastatrice",
        power: 30,
        precision: 3
    },
]

let player = {
    name: "Guerrier du feu",
    pv: 100,
    atks: attacks
}

let computer = {
    name: "Sombre Lutin",
    pv: 100,
    atks: attacks
}



function playerAttack(attacks) {

    for (let i = 0; i < attacks.length; i++) {
        console.log(i + 1 + " " + attacks[i].name);
    }

    let choice = parseInt(prompt("Choisis une attaque"))
    while (isNaN(choice) || choice < 1 || choice > attacks.length) {
        console.log("Entrez un chiffre valide");
        choice = parseInt(prompt("Choisis une attaque"))
    }
    return attacks[choice - 1]

}

function randomize(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function computerAttack(attacks) {
    let random = randomize(0, 3)
    return attacks[random]

}

function attaquer(atk, launcher, opponent) {
    let rdn = randomize(0, atk.precision)
    if (rdn == atk.precision) {
        if (atk.power < 0) {
            launcher.pv -= atk.power
        } else {
            opponent.pv -= atk.power
        }
    } else {
        console.log("raté");
    }
}



let bienvenu = prompt ("Bienvenu sur le jeu de combat")

while(player.pv >= 0 && computer.pv >= 0){
    let playerAtk = playerAttack(player.atks)
    attaquer(playerAtk, player, computer)
    
   let computerAtk = computerAttack(computer.atks)
   attaquer(computerAtk, computer, player);
   console.log("il te reste " + player.pv);
   console.log("il lui en reste " + computer.pv);
}if(player.pv === 0 || computer.pv === 0){
    console.log("C'est fini !");
    
}



















