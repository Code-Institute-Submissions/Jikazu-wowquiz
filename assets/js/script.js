const quizQuestions = [
    {
        question: "What is the capital of the alliance?",
        answers: 
            {choice1:"Ironforge",
            choice2:"Stormwind",
            choice3:"Orgrimmar",
            choice4:"Darnassus"}
        
       , correctAnswer: 1
     }  ,

    {
        question: "Who is the leader of the horde?",
        answers: 
            { choice1: "Sylvanas Windrunner",
            choice2: "Your mom",
            choice3: "Your dad",
            choice4: "Thrall"}
        
        , correctAnswer: 3
    }/*,

    {
        question: "How many bosses does Deadmines have?",
        answers: [
            { text: "7"},
            { text: "6"},
            { text: "9"},
            { text: "8"},
        ]
        , correctAnswer: 0
    },

    {
        question: "Which bosses drops the bindings for Thunderfury?",
        answers: [
            { text: "Lucifron and Shazzrah"},
            { text: "Baron Geddon and Ragnaros"},
            { text: "Garr and Baron Geddon"},
            { text: "Sulfuron and Garr"},
        ]
        , correctAnswer: 2
    },

    {
        question: "What level does druids get their bearform at?",
        answers: [
            { text: "12"},
            { text: "11"},
            { text: "14"},
            { text: "10"},
        ]
        , correctAnswer: 3
    },

    {
        question: "What is the racial mount for trolls?",
        answers: [
            { text: "Raptor"},
            { text: "Kodo"},
            { text: "Wolf"},
            { text: "Skeletal Horse"},
        ]
        , correctAnswer: 0
    },

    {
        question: "Who is the last boss of AQ20?",
        answers: [
            { text: "C'thun"},
            { text: "Ossirian the Unscarred"},
            { text: "Moam"},
            { text: "Ayamiss the Hunter"},
        ]
        , correctAnswer: 1
    },

    {
        question: "How much gold does paladins have to pay at the start of their epic mount quest?",
        answers: [
            { text: "300"},
            { text: "150"},
            { text: "100"},
            { text: "500"},
        ]
        , correctAnswer: 1
    },

    {
        question: "Which class can't gnomes play as?",
        answers: [
            { text: "Rogue"},
            { text: "Warrior"},
            { text: "Hunter"},
            { text: "Mage"},
        ]
        , correctAnswer: 2
    },

    {
        question: "Which horde race can be a druid?",
        answers: [
            { text: "Troll"},
            { text: "Orc"},
            { text: "Undead"},
            { text: "Tauren"},
        ]
        , correctAnswer: 3
    } */

]; 
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

/* when starting quiz this function sets everything to 0 */
function startQuiz(){
    
    score = 0;
    /*nextButton.innerHTML = "Next"; */
        showQuestion(quizQuestions);
        choice1Element.addEventListener('click', function() {
            console.log('Clicked!');
            currentQuestionIndex = currentQuestionIndex + 1;
            console.log(currentQuestionIndex);
            choice1Element.textContent = q[currentQuestionIndex].answers.choice1;
        })
}

function showQuestion(q) {
    let questionElement = document.getElementById("question");
    questionElement.textContent = q[currentQuestionIndex].question;
    
    let choice1Element = document.getElementById("btn1");
    let choice2Element = document.getElementById("btn2"); 
    let choice3Element = document.getElementById("btn3"); 
    let choice4Element = document.getElementById("btn4");  
    choice1Element.textContent = q[currentQuestionIndex].answers.choice1;
    choice2Element.textContent = q[currentQuestionIndex].answers.choice2;
    choice3Element.textContent = q[currentQuestionIndex].answers.choice3;
    choice4Element.textContent = q[currentQuestionIndex].answers.choice4;

    ;
    
}

/* function showQuestion(){
    let currentQuestion = quizQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button)
    });
}
*/

startQuiz();