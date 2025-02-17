"use strict";
class Quiz {
    constructor(questions) {
        this.currentIndex = 0;
        this.score = 0;
        this.questions = questions;
    }
    getCurrentQuestion() {
        return this.questions[this.currentIndex];
    }
    checkAnswer(answer) {
        if (answer === this.getCurrentQuestion().correctAnswer) {
            this.score++;
            return true;
        }
        return false;
    }
    nextQuestion() {
        this.currentIndex++;
        return this.currentIndex < this.questions.length;
    }
    getScore() {
        return this.score;
    }
}
const questions = [
    {
        question: "What is 5 + 2?",
        choices: ["3", "4", "7", "6"],
        correctAnswer: "7",
    },
    {
        question: "What is the capital of India?",
        choices: ["Berlin", "Madrid", "Dehi", "Rome"],
        correctAnswer: "Dehi",
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars",
    },
];
const quiz = new Quiz(questions);
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const nextButton = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
function loadQuestion() {
    const currentQuestion = quiz.getCurrentQuestion();
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach((choice) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => selectAnswer(choice));
        choicesElement.appendChild(button);
    });
    nextButton.classList.add("hidden");
}
function selectAnswer(answer) {
    quiz.checkAnswer(answer);
    nextButton.classList.remove("hidden");
}
nextButton.addEventListener("click", () => {
    if (quiz.nextQuestion()) {
        loadQuestion();
    }
    else {
        showScore();
    }
});
function showScore() {
    document.getElementById("question-container").classList.add("hidden");
    scoreContainer.classList.remove("hidden");
    scoreElement.textContent = quiz.getScore().toString();
}
loadQuestion();