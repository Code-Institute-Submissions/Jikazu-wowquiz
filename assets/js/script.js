const quizQuestions = [
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
    },

    {
        question: "How many bosses does Deadmines have?",
        answers: [
            { text: "7", correct: true},
            { text: "6", correct: false},
            { text: "9", correct: false},
            { text: "8", correct: false},
        ]
    },

    {
        question: "Which bosses drops the bindings for Thunderfury?",
        answers: [
            { text: "Lucifron and Shazzrah", correct: false},
            { text: "Baron Geddon and Ragnaros", correct: false},
            { text: "Garr and Baron Geddon", correct: true},
            { text: "Sulfuron and Garr", correct: false},
        ]
    },

    {
        question: "What level does druids get their bearform at?",
        answers: [
            { text: "12", correct: false},
            { text: "11", correct: false},
            { text: "14", correct: false},
            { text: "10", correct: true},
        ]
    },

    {
        question: "What is the racial mount for trolls?",
        answers: [
            { text: "Raptor", correct: true},
            { text: "Kodo", correct: false},
            { text: "Wolf", correct: false},
            { text: "Skeletal Horse", correct: false},
        ]
    },

    {
        question: "Who is the last boss of AQ20?",
        answers: [
            { text: "C'thun", correct: false},
            { text: "Ossirian the Unscarred", correct: true},
            { text: "Moam", correct: false},
            { text: "Ayamiss the Hunter", correct: false},
        ]
    },

    {
        question: "How much gold does paladins have to pay at the start of their epic mount quest?",
        answers: [
            { text: "300", correct: false},
            { text: "150", correct: true},
            { text: "100", correct: false},
            { text: "500", correct: false},
        ]
    },

    {
        question: "Which class can't gnomes play as?",
        answers: [
            { text: "Rogue", correct: false},
            { text: "Warrior", correct: false},
            { text: "Hunter", correct: true},
            { text: "Mage", correct: false},
        ]
    },

    {
        question: "Which horde race can be a druid?",
        answers: [
            { text: "Troll", correct: false},
            { text: "Orc", correct: false},
            { text: "Undead", correct: false},
            { text: "Tauren", correct: true},
        ]
    },

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