// preliminary 1 
var c = 5;
if(c > 3){
    console.log("is greater than");
}

// preliminary 2
var animal = "cat"
if(animal.length == 3){
    console.log("is the length");
}

// preliminary 3
var cat ="cat";
var dog = "dog";
if(cat == dog){
    console.log("cat is equal to dog");
} else {
    console.log("not the same");
}


// bronze Medal//
var person = {
    name: "Bobby",
    age: 12

};
if (person.age >= 18){
    console.log("Bobby is allowed");
} else {
    console.log("Bobby is not allowed");

}
if (person.name[0] == "B"){
    console.log("Bobby is allowed");
}

if (person.age >= 18 && person.name[0] == "B" ){ 
    console.log("allow Bobby in");
}
// silver medal
var c = 1;
if (c ==="1"){
    console.log("strict");
    
}else if(c == "1"){
    console.log("loose");

}else{
    console.log("not equal at all");
}

      
// silver

if(1 <= 2 && 2 == 4){
    console.log("yes");
}
   
// gold medal
// if statement checks to see if "dog"is a string

if(typeof "dog" === "string" ){
    console.log("dog is a string");
}
//
if(typeof "true" === "boolean"){
    console.log("is a Boolean");
}

var car = "mustang";
if(car == null){
    console.log("has been defined");
}
//
if("s"> 12){
    console.log("s is greater than 12");
}
if("f"> 20){
    console.log("f is greater than 20");
}
if("m" > 35){
    console.log("m is greater than 35");
}
//
var myNum = 10;
(myNum % 2 == 0 ) ?console.log( "even" ): console.log("odd");
//
    


