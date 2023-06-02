const questions = [
    {
        question: "What is the capital of the alliance?",
        answers: [
            { text: "Ironforge", correct: false},
            { text: "Stormwind", correct: true},
            { text: "Orgrimmar", correct: false},
            { text: "Darnassus", correct: false},
        ]
    },

    {
        question: "Who is the leader of the horde?",
        answers: [
            { text: "Sylvanas Windrunner", correct: false},
            { text: "Your mom", correct: false},
            { text: "Your dad", correct: false},
            { text: "Thrall", correct: true},
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button)
    });
}

startQuiz();