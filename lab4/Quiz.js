const quizQuestions = [
    { question: "Which device is used to click and select items on a computer screen?", answer: "mouse" },
    { question: "What is the process of saving something on a computer called?", answer: "save" },
    { question: "Which keyword is used to declare a variable in JavaScript?", answer: "let" },
    { question: "How many days are there in a week?", answer: "7" },
    { question: "Which gas do plants release during photosynthesis?", answer: "oxygen" }
];
function runQuiz() {

    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);
        if (userAnswer === null) {
            alert("You skipped this question.");
            continue;
        }
        userAnswer = userAnswer.toLowerCase().trim();
        if (userAnswer.toLowerCase() === quizQuestions[i].answer) {
            alert("Correct! 🎉");
            score++;
        } else {
            alert("Wrong ❌\nCorrect answer: " + quizQuestions[i].answer);
        }
    }
    alert("Quiz Completed!\nYour Score: " + score + " / " + quizQuestions.length);
}
runQuiz();