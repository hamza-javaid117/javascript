function signup(){
    let username = (prompt("Enter your Username"));
    if(!username){
        alert("Username is Required");
    }

    let name = (prompt("Enter your Fullname"))

    let password = (prompt("Enter Your Password"));
    for (let i = 0; password.length < 6; i++) {
        alert("Password is invalid")
        password = (prompt("Enter Your Password")); 
    }
    
    // while (password.length < 6) {
    //     password = ""
    //     alert("Password is invalid");
    //      password = (prompt("Enter Your Password"));
    //     //  console.log(password.length());
        
    // }

    alert("Thanks" + name + "Your account is created")

}

signup()