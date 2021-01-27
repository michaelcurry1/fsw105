function fiveOrGreater(arr) {
    const result = arr.filter(function(num){
        if(num >= 5)
            return num
    });
    return result;
}
console.log("1 five or greater.");
console.log(fiveOrGreater([3, 6, 8, 2]));




function evensOnly(arr) {
    const result = arr.filter(function(num){
        if (num % 2 == 0)
        return num;
    });
    return result;
}
console.log("2 even numbers.");
console.log(evensOnly([3, 6, 8, 2]));


function doubleNumbers(arr){
    const result = arr.map(function(num){
        return num * 2;
    });
    return result;
    }
console.log("3 double the numbers");
console.log(doubleNumbers([2, 5, 100]));




function stringItUp(arr){
    const result = arr.map(function(num){
        return num.toString();
    });
    return result;
}
console.log("4 string it up");
console.log(stringItUp([2, 5, 100]));


function capitalizeNames(arr){
    const result = arr.map(function(num){
        return num[0].toUpperCase() + num.slice(1).toLowerCase();
    })
    return result;
}

console.log("5 capitalize");
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));



function total(arr) {
    const result = arr.reduce(function(num, finalSum){
        return finalSum = finalSum + num;
    });
    return result;
}
console.log("6 total of all the numbers");
console.log(total([1, 2, 3]));


function stringConcat(arr) {
    const result = arr.reduce(function(){
        return arr.join("");
    });
    return result;
   }
   console.log("7 long string of those numbers.");
   console.log(stringConcat([1, 2, 3])); 


   function totalVoters(arr){
    return arr.reduce(function(count, voters) {
    return count + voters.voted;
    }, 0);
}
var voters = [
    {name: 'Bob' , age: 30, voted: true},
    {name: 'Jake' , age: 32, voted: true},
    {name: 'Kate' , age: 25, voted: false},
    {name: 'Sam' , age: 20, voted: false},
    {name: 'Phil' , age: 21, voted: true},
    {name: 'Ed' , age: 55, voted: true},
    {name: 'Tami' , age: 54, voted: true},
    {name: 'Mary' , age: 31, voted: false},
    {name: 'Becky' , age: 43, voted: false},
    {name: 'Joey' , age: 41, voted: true},
    {name: 'Jeff' , age: 30, voted: true},
    {name: 'Zack' , age: 19, voted: false},
];
console.log("8 how many people voted");
console.log(totalVoters(voters));



function  leastToGreatest(arr){
    const result = arr.sort(function(num1, num2){
        return num1 - num2;
    });
    return result;
}
console.log("9 smallest number to largest");
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));



function  greatestToLeast(arr){
    const result = arr.sort(function(num1, num2){
        return num2 - num1;
    });
    return result;
}
console.log("10 largest number to smallest");
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));


function lengthSort(arr) {
    const result = arr.sort(function(a, b){
        return a.length - b.length;
    });
    return result;
   }
   console.log("11 shortest string to longest");
   console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));



