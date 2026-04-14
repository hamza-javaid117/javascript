let random = Math.floor(Math.random()*300) + 1
let number ;

while (number !== random) {
    number = Number(prompt("Guess the Correct Number"));

    if (number > random) {
        alert("Less")
    } 
    
    else if (number < random) {
        alert("Bigger");
    }
    
    else{
        alert("Correcr Number")
    }
    
}


