let quiz = {
   math: [
    {
        question: "10 + 5 = ?",
        options: ["12", "15", "20"],
        correct: "15"
    },
    {
        question: "9 × 3 = ?",
        options: ["18", "27", "36"],
        correct: "27"
    }
],
science : [
    {
        question: "Water formula kya hai?",
        options: ["H2O", "CO2", "O2"],
        correct: "H2O"
    },
    {
        question: "Sun ek kya hai?",
        options: ["Planet", "Star", "Galaxy"],
        correct: "Star"
    }
],
cs: [
    {
        question: "HTML ka full form kya hai?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language"],
        correct: "Hyper Text Markup Language"
    },
    {
        question: "JavaScript kya hai?",
        options: ["Programming Language", "Database", "Operating System"],
        correct: "Programming Language"
    }
]
};

let userchoice = prompt("Please select your type of quiz\nMath\nScience\nCS").toLowerCase();

let selectedQuiz = quiz[userchoice];

if (selectedQuiz) {

    for (let i = 0; i < selectedQuiz.length; i++) {

        let q = selectedQuiz[i];

        let userAnswer = prompt(
            q.question + "\n" + q.options.join("\n")
        );

        
        alert("Correct Answer: " + q.correct);

        
    }

} else {
    alert("Invalid choice");
}