"use strict";

/*
===========================================
        SIMPLE BANKING SYSTEM (CLI)
===========================================
Features:
- User Login / Signup
- Balance Management
- Deposit / Withdraw
- Transaction History
- Security Validation
- Session Handling
===========================================
*/

// Database Simulation
let users = [];

// Utility Functions
function generateId() {
    return Math.floor(Math.random() * 1000000).toString();
}

function findUser(username) {
    return users.find(u => u.username === username);
}

function validateAmount(amount) {
    return !isNaN(amount) && amount > 0;
}

function logTransaction(user, type, amount) {
    user.transactions.push({
        type: type,
        amount: amount,
        date: new Date().toLocaleString()
    });
}

// Signup System
function signup() {
    let username = prompt("Enter Username:");
    if (!username) {
        alert("Username required!");
        return null;
    }

    if (findUser(username)) {
        alert("User already exists!");
        return null;
    }

    let password = prompt("Enter Password:");
    if (!password) {
        alert("Password required!");
        return null;
    }

    let newUser = {
        id: generateId(),
        username: username,
        password: password,
        balance: 0,
        transactions: []
    };

    users.push(newUser);
    alert("Signup successful!");
    return newUser;
}

// Login System
function login() {
    let username = prompt("Enter Username:");
    let password = prompt("Enter Password:");

    let user = findUser(username);

    if (!user || user.password !== password) {
        alert("Invalid credentials!");
        return null;
    }

    alert("Login successful!");
    return user;
}

// Deposit
function deposit(user) {
    let amount = parseFloat(prompt("Enter amount to deposit:"));

    if (!validateAmount(amount)) {
        alert("Invalid amount!");
        return;
    }

    user.balance += amount;
    logTransaction(user, "DEPOSIT", amount);

    alert("Deposit successful! New Balance: " + user.balance);
}

// Withdraw
function withdraw(user) {
    let amount = parseFloat(prompt("Enter amount to withdraw:"));

    if (!validateAmount(amount)) {
        alert("Invalid amount!");
        return;
    }

    if (amount > user.balance) {
        alert("Insufficient balance!");
        return;
    }

    user.balance -= amount;
    logTransaction(user, "WITHDRAW", amount);

    alert("Withdrawal successful! New Balance: " + user.balance);
}

// View Balance
function viewBalance(user) {
    alert("Current Balance: " + user.balance);
}

// Transaction History
function showTransactions(user) {
    if (user.transactions.length === 0) {
        alert("No transactions found.");
        return;
    }

    let history = "Transaction History:\n";

    for (let i = 0; i < user.transactions.length; i++) {
        let t = user.transactions[i];
        history += `${i + 1}. ${t.type} - ${t.amount} - ${t.date}\n`;
    }

    alert(history);
}

// Logout
function logout() {
    alert("Logged out successfully!");
}

// Dashboard
function dashboard(user) {
    let running = true;

    while (running) {
        let choice = prompt(
            "1. Deposit\n" +
            "2. Withdraw\n" +
            "3. View Balance\n" +
            "4. Transaction History\n" +
            "5. Logout\n" +
            "Choose option:"
        );

        switch (choice) {
            case "1":
                deposit(user);
                break;
            case "2":
                withdraw(user);
                break;
            case "3":
                viewBalance(user);
                break;
            case "4":
                showTransactions(user);
                break;
            case "5":
                logout();
                running = false;
                break;
            default:
                alert("Invalid choice!");
        }
    }
}

// Main App Loop
function startApp() {
    let appRunning = true;

    while (appRunning) {
        let choice = prompt(
            "===== BANK SYSTEM =====\n" +
            "1. Signup\n" +
            "2. Login\n" +
            "3. Exit\n" +
            "Choose option:"
        );

        switch (choice) {
            case "1":
                signup();
                break;

            case "2":
                let user = login();
                if (user) {
                    dashboard(user);
                }
                break;

            case "3":
                alert("Goodbye!");
                appRunning = false;
                break;

            default:
                alert("Invalid choice!");
        }
    }
}

// Security Layer Example
function securityCheck() {
    let attempts = 0;

    while (attempts < 3) {
        let code = prompt("Enter security code (1234):");

        if (code === "1234") {
            return true;
        }

        attempts++;
        alert("Wrong code! Attempts left: " + (3 - attempts));
    }

    alert("Too many failed attempts!");
    return false;
}

// Start Execution
if (securityCheck()) {
    startApp();
} else {
    alert("Access denied!");
}