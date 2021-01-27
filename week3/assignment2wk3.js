//assignment 1 functions

function add(a, b) {
    return a + b;
}
console.log(add(3, 4));

//assignment 2
function dog(a, b, c){
    return Math.max(a, b, c )
}
 console.log(dog(1, 2, 3));
    
 // assignment 3

 
function isEven(a){
    return (a % 2 == 0) ? "even" : "odd";
}

console.log(isEven(1))


// assignment 4

function characters(a){
    if (a.length <= 20){
        return a.concat(a);
    }
    else if(a.length > 20){
            return a.substr (0, a.length / 2);
    }
}

console.log(characters("I would like to say hello"));


// extra credit

