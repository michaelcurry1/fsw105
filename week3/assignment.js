var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];
var count = 0;

for (var i = 0; i < officeItems.length; i++){
    if (officeItems[i] === "computer"){
        count++;
    }
}
console.log(count); 

// 1st assignment

var peopleWhoWantToSeeMadMaxFuryRoad = [ 
{
    name: "Mike",
    age: 12,
    gender: "male"
},{
    name: "Madeline",
    age: 80,
    gender:"female"
},{
    name: "Cheryl",
    age: 22,
    gender: "female"
},{
    name: "Sam",
    age: 30,
    gender: "male"
},{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
]
function isOldEnough(){
    for (var i = 0;i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log("old enough");
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){ 
            console.log("not old enugh");   

        }
    }
}
console.log("..........");
isOldEnough();

// loops number 2

function isOldEnoughWithName(){
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max.");
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){ 
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max.");   
        }   
    } 
}
console.log("............");
isOldEnoughWithName();

// loops number 3
function isMaleOrFemale(){
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        var  gender;
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male"){
            gender = " him ";
        }
        else{
            gender = "her";
        }
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max. Let " + gender + " in.");
           }
           else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){ 
           console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max. Don't let " + gender + " in.");   
           }   
       }
}
console.log("...........")
isMaleOrFemale();
// loops number 4

for(var i = 0; i <= 100; i++){
    i % 2 === 0 ? console.log(i + " is even") : console.log(i +" is odd");

}
