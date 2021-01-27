// strings1 week4

function capitalizeAndLowercase(str){
    var upperAndLowerCase = str.toUpperCase() + str.toLowerCase();
    console.log(upperAndLowerCase);
}
capitalizeAndLowercase("Hello");

// string#2

function findMiddleIndex(str){
    var middleString = Math.floor(str.length / 2);
    console.log("Half Length of the String: " + middleString);
}
(findMiddleIndex("Hello"));

//string#3

function returnFirstHalf (str) {
    if (str.length % 2 == 0){
        return str.slice(0, str.length / 2);
    }
    return str;
}
console.log(returnFirstHalf("Hello "));
console.log(returnFirstHalf("Hello World "));

// string#4


function uppercase(str)
{
    var array1 = str.split(" ");
    var newarray1 = [];
      
    for(var x = 0; x < array1.length; x++){
        newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
    return newarray1.join("  ");
  }
  console.log(uppercase("i love my harley davidson"));
  var test ="hello"
  console.log(test.toUpperCase())