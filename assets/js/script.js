// First we set a total of ten questions
const quizQuestions = [
    {
        question: "Q1 of 10: What is the capital of the alliance?",
        answers: {
            choice1:"Ironforge",
            choice2:"Stormwind",
            choice3:"Orgrimmar",
            choice4:"Darnassus"
        },
        correctAnswer: 1
     },

    {
        question: "Q2 of 10: Who is the leader of the horde?",
        answers: {
            choice1: "Sylvanas Windrunner",
            choice2: "Your mom",
            choice3: "Your dad",
            choice4: "Thrall"
        },
        correctAnswer: 3
    },

    {
        question: "Q3 of 10: How many bosses does Deadmines have?",
        answers: {
            choice1: "7",
            choice2: "6",
            choice3: "9",
            choice4: "8"
        },
        correctAnswer: 3
    },

    {
        question: "Q4 of 10: Which bosses drops the bindings for Thunderfury?",
        answers: {
            choice1: "Lucifron and Shazzrah",
            choice2: "Baron Geddon and Ragnaros",
            choice3: "Garr and Baron Geddon",
            choice4: "Sulfuron and Garr"
        },
        correctAnswer: 2
    },

    {
        question: "Q5 of 10: What level does druids get their bearform at?",
        answers: {
            choice1: "12",
            choice2: "11",
            choice3: "14",
            choice4: "10"
        },
        correctAnswer: 3
    },

    {
        question: "Q6 of 10: What is the racial mount for trolls?",
        answers: {
            choice1: "Raptor",
            choice2: "Kodo",
            choice3: "Wolf",
            choice4: "Skeletal Horse"
        },
            correctAnswer: 1
    },

    {
        question: "Q7 of 10: Who is the last boss of AQ20?",
        answers: {
            choice1: "C'thun",
            choice2: "Ossirian the Unscarred",
            choice3: "Moam",
            choice4: "Ayamiss the Hunter"
        },
        correctAnswer: 1
    },

    {
        question: "Q8 of 10: How much gold does paladins have to pay at the start of their epic mount quest?",
        answers:{ 
            choice1: "300",
            choice2: "150",
            choice3: "100",
            choice4: "500"
        },
        correctAnswer: 1
    },

    {
        question: "Q9 of 10: Which class can't gnomes play as?",
        answers:{
            choice1: "Rogue",
            choice2: "Warrior",
            choice3: "Hunter",
            choice4: "Mage"
        },
        correctAnswer: 2
    },

    {
        question: "Q10 of 10: Which horde race can be a druid?",
        answers: {
            choice1: "Troll",
            choice2: "Orc",
            choice3: "Undead",
            choice4: "Tauren"
        },
        correctAnswer: 3
    }

];

const nextButton = document.getElementById("next-btn");

// Set the starting parameters
let currentQuestionIndex = 0;
let userAns = 0;
let score = 0;

function startQuiz(){
    showQuestion(quizQuestions, currentQuestionIndex);
    nextButton.onclick = function() {
        console.log("your answer was ", userAns);                                               // Console log the user answer for the preceding question
        console.log("correct answer was ", quizQuestions[currentQuestionIndex].correctAnswer);  // Console log the correct answer for the preceding question
        if (userAns == quizQuestions[currentQuestionIndex].correctAnswer) {
            score = score + 10;
        }
        console.log("so far you have scored ", score, "/", 10*(currentQuestionIndex + 1));
        console.log("current index", currentQuestionIndex);
        userAns = 0;                                                                            // Reset the userAns for the new question
        if (currentQuestionIndex < quizQuestions.length - 1) {
            showQuestion(quizQuestions, currentQuestionIndex + 1);
            currentQuestionIndex++;
        } else {
            showFinalScore();
        }   
    };
}

function showQuestion(q, i) {
    let questionElement = document.getElementById("question");
    let choice1Element = document.getElementById("btn1");
    let choice2Element = document.getElementById("btn2"); 
    let choice3Element = document.getElementById("btn3"); 
    let choice4Element = document.getElementById("btn4");  

    questionElement.textContent = q[i].question;
    choice1Element.textContent = q[i].answers.choice1;
    choice2Element.textContent = q[i].answers.choice2;
    choice3Element.textContent = q[i].answers.choice3;
    choice4Element.textContent = q[i].answers.choice4;
   
    choice1Element.addEventListener('click', function() {                                       // Anytime they click on the Choice 1 button, override the parameter 'userAns' as 1
        userAns = 1;
        console.log(userAns);
      });    
      
    choice2Element.addEventListener('click', function() {                                       // Anytime they click on the Choice 2 button, override the parameter 'userAns' as 2
        userAns = 2;
        console.log(userAns);
      });

    choice3Element.addEventListener('click', function() {                                       // Anytime they click on the Choice 3 button, override the parameter 'userAns' as 3
        userAns = 3;
        console.log(userAns);
      });

    choice4Element.addEventListener('click', function() {                                       // Anytime they click on the Choice 4 button, override the parameter 'userAns' as 4
        userAns = 4;
        console.log(userAns);
      });

}

function showFinalScore() {
    console.log("show final score");
    let questionElement = document.getElementById("question");                                  // This is a quick way to display final score... need to remove all the buttons
    questionElement.textContent = "Your final score is " + score + "/" + 10*quizQuestions.length;
}

startQuiz();