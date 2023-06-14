// ------------------------ Define constants ------------------------------------------------------------------------------------
const nextButton = document.getElementById("next-btn");         // Name the element with id 'next-btn', 'nextButton'
const quizQuestions = [                                         // Set up my array of questions
    {
        question: "What is the capital of the alliance?",
        answers: {
            choice1:"Ironforge",
            choice2:"Stormwind",
            choice3:"Orgrimmar",
            choice4:"Darnassus"
        },
        correctAnswer: 2
     },

    {
        question: "Who is the leader of the horde?",
        answers: {
            choice1: "Sylvanas Windrunner",
            choice2: "Tyrande Whisperwind",
            choice3: "Onyxia",
            choice4: "Thrall"
        },
        correctAnswer: 4
    },

    {
        question: "How many bosses does Deadmines have?",
        answers: {
            choice1: "7",
            choice2: "6",
            choice3: "9",
            choice4: "8"
        },
        correctAnswer: 4
    },

    {
        question: "Which bosses drops the bindings for Thunderfury?",
        answers: {
            choice1: "Lucifron and Shazzrah",
            choice2: "Baron Geddon and Ragnaros",
            choice3: "Garr and Baron Geddon",
            choice4: "Sulfuron and Garr"
        },
        correctAnswer: 3
    },

    {
        question: "What level does druids get their bearform at?",
        answers: {
            choice1: "12",
            choice2: "11",
            choice3: "14",
            choice4: "10"
        },
        correctAnswer: 4
    },

    {
        question: "What is the racial mount for trolls?",
        answers: {
            choice1: "Raptor",
            choice2: "Kodo",
            choice3: "Wolf",
            choice4: "Skeletal Horse"
        },
            correctAnswer: 1
    },

    {
        question: "Who is the last boss of AQ20?",
        answers: {
            choice1: "C'thun",
            choice2: "Ossirian the Unscarred",
            choice3: "Moam",
            choice4: "Ayamiss the Hunter"
        },
        correctAnswer: 2
    },

    {
        question: "How much gold does paladins have to pay at the start of their epic mount quest?",
        answers:{ 
            choice1: "300",
            choice2: "150",
            choice3: "100",
            choice4: "500"
        },
        correctAnswer: 2
    },

    {
        question: "Which class can't gnomes play as?",
        answers:{
            choice1: "Rogue",
            choice2: "Warrior",
            choice3: "Hunter",
            choice4: "Mage"
        },
        correctAnswer: 3
    },

    {
        question: "Which horde race can be a druid?",
        answers: {
            choice1: "Troll",
            choice2: "Orc",
            choice3: "Undead",
            choice4: "Tauren"
        },
        correctAnswer: 4
    }

];

// ------------------------ Set up my functions ------------------------------------------------------------------------------------

function startQuiz(){
    showQuestion(quizQuestions, currentQuestionIndex);
    nextButton.onclick = function() {
        document.getElementById("btn1").disabled=false;
        document.getElementById("btn2").disabled=false;
        document.getElementById("btn3").disabled=false;
        document.getElementById("btn4").disabled=false;
        document.getElementById("check-answer").innerHTML = "Check Answer";
        if (userAns > 0) {
            document.getElementById(arr[userAns-1]).style.background=""; 
        }
        document.getElementById(arr[quizQuestions[currentQuestionIndex].correctAnswer - 1]).style.background=""; 
        if (userAns == quizQuestions[currentQuestionIndex].correctAnswer) {
            score = score + 1;
        }
        document.getElementById("score-box").textContent = "Score: " + score + "/" + (currentQuestionIndex + 1);
        userAns = 0;                                                                            // Reset the userAns for the new question
        if (currentQuestionIndex < quizQuestions.length - 1) {
            showQuestion(quizQuestions, currentQuestionIndex + 1);
            currentQuestionIndex++;
        } else {
            showFinalScore();
            document.getElementById("answer-button").style.display="none";
        }   
    };
}

function showQuestion(q, i) {
    let questionElement = document.getElementById("question");
    let choice1Element = document.getElementById("btn1");
    let choice2Element = document.getElementById("btn2"); 
    let choice3Element = document.getElementById("btn3"); 
    let choice4Element = document.getElementById("btn4");  

    questionElement.textContent = "Q" + (i + 1) + " of " + quizQuestions.length + ": " + q[i].question;
    choice1Element.textContent = q[i].answers.choice1;
    choice2Element.textContent = q[i].answers.choice2;
    choice3Element.textContent = q[i].answers.choice3;
    choice4Element.textContent = q[i].answers.choice4;
    
    choice1Element.addEventListener('click', function() {                                       // Anytime they click on the Choice 1 button, override the parameter 'userAns' as 1
        userAns = 1;
      });    
      
    choice2Element.addEventListener('click', function() {                                       // Anytime they click on the Choice 2 button, override the parameter 'userAns' as 2
        userAns = 2;
      });

    choice3Element.addEventListener('click', function() {                                       // Anytime they click on the Choice 3 button, override the parameter 'userAns' as 3
        userAns = 3;
      });

    choice4Element.addEventListener('click', function() {                                       // Anytime they click on the Choice 4 button, override the parameter 'userAns' as 4
        userAns = 4;
      });
}

function showFinalScore() {
    let questionElement = document.getElementById("question");                                  // This is a quick way to display final score
    questionElement.textContent = "Your final score is " + score + "/" + quizQuestions.length; 
    document.getElementById("score-box").style.display="none";
}

let checkAnswer = document.getElementById("check-answer");
let arr = ["btn1", "btn2", "btn3", "btn4"];

checkAnswer.addEventListener('click', function() {                                       // Anytime they click on the check answer button it displays if they got the question right
    if (userAns == quizQuestions[currentQuestionIndex].correctAnswer) {
        checkAnswer.innerHTML = "Correct!";
        document.getElementById(arr[quizQuestions[currentQuestionIndex].correctAnswer -1]).style.background="green";
        document.getElementById("btn1").disabled=true;
        document.getElementById("btn2").disabled=true;
        document.getElementById("btn3").disabled=true;
        document.getElementById("btn4").disabled=true;
    } else {
        checkAnswer.innerHTML = "Incorrect!";
        document.getElementById(arr[userAns-1]).style.background="red";
        document.getElementById(arr[quizQuestions[currentQuestionIndex].correctAnswer - 1]).style.background="green";
        document.getElementById("btn1").disabled=true;
        document.getElementById("btn2").disabled=true;
        document.getElementById("btn3").disabled=true;
        document.getElementById("btn4").disabled=true;
    }
  });    

document.getElementById('restart-quiz').addEventListener('click', function(){           // Resets the page so they can start the quiz again
    location.reload();
    return false;
});

// ------------------------ Parameters and a call to start the quiz ------------------------------------------------------------------------------------

let currentQuestionIndex = 0;                                                                   // Starting parameter
let userAns = 0;                                                                                // Starting parameter
let score = 0;                                                                                  // Starting parameter
startQuiz();                                                                                    // Run the function
