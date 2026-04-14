function bank(){
    let PIN = "1234";
    let password;
    let balance = "1000"

    let attempts = 3;
    while (attempts > 0) {
        password = prompt("Enter your PIN");

        if (password === PIN) {
            alert("Login Successfully");
            break;
        }
        else{
            attempts -- ;
            alert("Incorrect Pin attemps Lefted : " + attempts );
        }

    }

    let choice;
    
    while (true) {
        choice = prompt("Choose an option:\n" +
            "1. Check Balance\n" +
            "2. Withdraw Cash\n" +
            "3. Deposit Cash\n" +
            "4. Exit"
        )
        break;
    };

    switch (choice) {
        case "1":
            alert("Your balance is : " + balance);
            break;
        case "2":
            let withdraw = Number (prompt("Enter the amount you want to withdraw"));
            if (withdraw > balance && withdraw < 0) {
                alert("Incifficent balance")
            }
            else{
                balance-=withdraw;
                alert("Withdraw successful\n Your remaining balance is " + balance)
            }
            break;
        case "3" :
            let deposit = Number (prompt("Enter the ammount you want to deposite"));
            if (deposit !== 0) {
                balance += deposit;
                alert("Your Amount is deposit successfully your new balance is "  + balance);
            }

            else{
                alert("Invalid Amount");
            }
            break;

            case "4":
                alert("Thanks for using ATM");
                break;

        default:
            alert("Invalid Choice")
            break;
    }
}

bank ()