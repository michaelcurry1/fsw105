const readlineSync = require("readline-sync");

const name = readlineSync.question("What's Your Name? ");

readlineSync.question("Hi "+ name +",Welcome to Mayhem!!! Where you will risk your life to destroy Evil. To begin press enter. ");

const badGuysList = ["Killer Demon", "Wild Zombie ", "Cyber Ghost ", "Blood Letter "];
const treasure = ["Gold Bars ", "Silver Bars ", "Plutonium Bars ", "Fire Stones "];
var prize = [];
let userHealth = 20;
const options = ["Walk ", "Exit ", "Print "];
let pickUp = treasure[Math.floor(Math.random()*treasure.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (5 - 4 + 3) + 5);
    const badGuys = badGuysList[Math.floor(Math.random() * badGuysList.length)];
    let badGuysHealth = 20;
    
    const badGuysPower = Math.floor(Math.random() * (5 - 3 + 2) + 5);

    const index = readlineSync.keyInSelect(options, "What is your next move? ");

    if (options[index] == "Exit "){
        return userHealth = 0;
    } else if(options[index] == "Print "){
        console.log(name + ":\n" + userHealth + "\nTreasure: "+ pickUp);
    } else if(options[index] === "Walk "){
        let key = Math.random();
        if (key <= .3) {
            console.log("Walking...");
        } else if (key >= .3) {
            console.log(badGuys + " showed up. ");

            while(badGuysHealth > 0 && userHealth > 0) {

                const user = readlineSync.question('Next you want to enter "r" to run or "a" to attack. ');

                switch (user) {
                    case 'r': //run away
                    const run = Math.random();
                    if(run < .5){
                        console.log("Before you can run away " + badGuys + " Attacks with you: " + badGuysPower);

                    }else if(run>= .5) {
                        console.log("You ran away!!! ");
                       break; 
                    }
                
                    case 'a':
                        //attack
                        badGuysHealth -= attackPower;
                        console.log(" You Attacked "+ badGuys + " With " + attackPower +" attack power ");

                        userHealth -= badGuysPower;
                        console.log(" Enemy just attacked you " + badGuysPower + " Attack power ");

                        if(badGuysHealth <= 0){
                            console.log('you killed' + badGuys + '.\n' + badGuys + 'left:' + pickUp);
                            let loot = Math.random();
                            if (loot <= .3){
                                prize.push(pickUp);
                            } 
                            }else if(userHealth <= 0){
                                console.log(badGuys + " has beat you. You are dead ! ")
                            }  
                    }
                } 
            }
        }
    
    while(userHealth > 0){
        userRestore = function(){
            userActive = true;
            userHealth = 20;
        };
        userRestore();
        game();
    }}
    game();