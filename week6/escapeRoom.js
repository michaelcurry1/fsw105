var readlineSync = require('readline-sync');
 
// Wait for user's response.
var playerName = readlineSync.question('May I have your name? ');
//console.log('Hi ' + playerName + '!');

var welcomeMessage = `Hello ${playerName}, Welcome to the Escape Room Game Simulation!`;
console.log(welcomeMessage);

// Boolean Flags
var isAlive = true;
var hasKey = false;

while(isAlive == true){
    const menuOptions = readlineSync.keyIn('Enter 1 to put hand in hole \n Enter 2 to Find the key \n Enter 3 to Open the door ',{limit: "$<1-3>"});
    console.log(menuOptions);
    if (menuOptions == 1){
        console.log(`${playerName}, oops, you are dead. Game Over.`);
        isAlive = false;
    }
    else if (menuOptions == 2 && hasKey == false){
        // 1st time player chooses option 2
        console.log(`${playerName}, Great you have found the key!`);
        hasKey == true;
    }    
    else if (menuOptions ==2 && hasKey == true){
        //Subsequent entry with option 2
        //display a message that the player is wasting time and move on to option - 3
        console.log(`${playerName}, you already have the key. Please move on to option 3 Now!!!`);
    }    
    else if (menuOptions == 3 && hasKey == false){
        //1st time player chooses option 2, and has Not found the key
        console.log(`${playerName}, unfortunately, you don't have the key, please find the key first!`);
    }
    else if (menuOptions == 3 && hasKey == true){
        // player chooses option 3 and finds the key
        console.log(`${playerName}, WINNER WINNER WINNER, YOU FOUND THE KEY AND ESCAPED,CONGRATULATIONS`);
        isAlive = false;
    }
}
//menuId = readlineSync.keyIn("Hit 1...3 key: ", {limit: "$<1-3"});
