let choice = "";

while (choice !== "5") {

    choice = (prompt("Enter the number (1 to 4)\n1. Addition\n2. Subtract\n3. Multiply\n4. Divide"));

// if (choice === 5) {
//     console.log("Calculation finish......Bye!");
//     break;
// }

switch (choice) {
    case "1":
        let num1=Number (prompt("Enter the number 1"));
        let num2=Number (prompt("Enter the number 2"));
        let sum= addition(num1, num2);
        console.log(sum);
        break;

        case "2":
        let num3=Number (prompt("Enter the number 1"));
        let num4=Number (prompt("Enter the number 2"));
        let diffrence=Subtract (num3, num4);
        console.log(diffrence);
        break;

        case "3":
        let num5=Number (prompt("Enter the number 1"));
        let num6=Number (prompt("Enter the number 2"));
        let produt= Multiply(num5, num6);
        console.log(produt);
        break;  

        case "4":
        let num7=Number (prompt("Enter the number 1"));
        let num8=Number (prompt("Enter the number 2"));
        let quotient= Division(num7, num8);
        console.log(quotient);
        break;

        case "5":
        console.log("Good bye");
        break;

    default:
        console.log("Invalid choice");
        break;
}

}

function addition(a, b){
    return a+b
}

function Subtract(a, b){
    return a-b
}

function Multiply(a, b){
    return a*b
}

function Division(a, b){
    return a/b
}



