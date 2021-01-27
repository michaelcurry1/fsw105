var fruit = ["banana", "apple", "orange",  "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//function arrayExercise(){
    vegetables.pop();
    //console.log("vegetables: ", vegetables);

    fruit.shift();
    //console.log("fruit: ", fruit);

    var indexOfOrange = fruit.indexOf("orange");
    //console.log("Index of first appearance of orange string: " + indexOfOrange);
    
    fruit.push(indexOfOrange);
    //console.log(fruit + indexOfOrange);

    //console.log("vegetables " + vegetables.length)
    var vegLength = vegetables.length
    vegetables.push(vegLength);
    //console.log(vegetables + vegetables.length);

    

    var food = fruit.concat(vegetables);
   

    food.splice(4,2);
    //console.log(food + indexOfOrange);

    food.reverse();
    //console.log(food + indexOfOrange);

    food.toString();
    console.log(food + "");


//console.log(arrayExercise());