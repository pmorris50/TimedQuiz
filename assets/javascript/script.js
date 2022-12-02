//setting elements to variables so we can style
var body = document.body;
var question = document.querySelector('#question');
var headerEL = document.querySelectorAll("header");
var timerDisplay = document.querySelector(".timerdisplay")
var startButton = document.querySelector("#startbutton");
//var quizQuestion = document.querySelector("#question");
var submitScore = document.querySelector(".form-container");
var hideTextAfterClick = document.querySelector('.StartQuiz');
var questionDisplay = document.querySelector("#question-display");
var showQuestion = document.querySelector('#question');
var showAnswer = document.querySelector('#answer-display');
//use text.content to input answers
var choiceA = document.querySelector("#choiceA");
var choiceB = document.querySelector("#choiceB");
var choiceC = document.querySelector("#choiceC");
var choiceD = document.querySelector("#choiceD");
var initials = document.querySelector('.submit');

//need to test 10-13
//global var
var timeInterval
var timeLeft = 60;
var currentQuestion = 0;
//appendchildforquestion
//body.append(question);

//initial styling to hide questions
showAnswer.setAttribute('style', 'display: none');
questionDisplay.setAttribute("style", "display: none");
submitScore.setAttribute("style", "display: none");


var questionList = [
    {

        question: "JavaScript is an ______ language",
        answers: ['Functional', 'Object-Oriented', 'Procedural', 'Scripted'],
        correct: 'Object-Oriented'
    },

    {
        question: "You can store data in JavaScript in?",
        answers: ['Objects', 'Arrays', 'Variables', 'All of the above'],
        correct: 'All of the above'
    },

    {
        question: "Which function is used to turn an object into a string?",
        answers: ['stringify()', 'parse()', 'convert()', 'None of the above'],
        correct: 'stringify()'
    },
    {
        question: "When an interpreter encounters an empty statements, what will it do?",
        answers: ['Shows a warning', 'Prompts to complete the statement', 'Throws an Error', 'Ignores the statements'],
        correct: 'Ignores the statements'


    },
    {
        question: 'The function and var are known as:',
        answers:['Keywords', 'Data types', 'Declaration statements', 'Prototypes'],
        correct: 'Declaration statements'

    }

]
//selectAnswerWorks
function selectAnswer() {
    showAnswer.addEventListener('click', function (event) {
        if (event.target.matches('li')); {
            if (event.target.textContent === questionList[currentQuestion].correct) {
                console.log('please');


            }
            else {
                timeLeft = timeLeft - 15;
            };
            currentQuestion++;
            displayQuestion();

        }
    })





};


// function setNextQuestion(){
//    userChoice = selectAnswer()
//   console.log(userChoice);



// }



function displayQuestion() {
    if (currentQuestion < questionList.length) {
        showQuestion.textContent = questionList[currentQuestion].question;
        choiceA.textContent = questionList[currentQuestion].answers[0];
        choiceB.textContent = questionList[currentQuestion].answers[1];
        choiceC.textContent = questionList[currentQuestion].answers[2];
        choiceD.textContent = questionList[currentQuestion].answers[3];


    } else { endQuiz() };
}
function display() {
    hideTextAfterClick.setAttribute("style", "display: none");
    questionDisplay.setAttribute("style", "display: block", 'border: 2px solid black');
    showAnswer.setAttribute('style', 'display: block');
    //

}
//above is good




function startQuiz() {


    display();
    displayQuestion();
    selectAnswer();
    // setNextQuestion();

}






//eventlistener on click button
startButton.addEventListener("click", function () {
    countdown();
    startQuiz();
});
//timer that counts down from 60 
function countdown() {

    timeInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft > 1) {
            timerDisplay.textContent = "Time: " + timeLeft;

        }

        else {
            timerDisplay.textContent = "Time is up";
            
            endQuiz();
            clearInterval(timeInterval);
        }
    }, 1000);
}



function endQuiz() {
    submitScore.setAttribute("style", "display: block");
    showAnswer.setAttribute('style', 'display: none');
    questionDisplay.setAttribute("style", "display: none");
    clearInterval(timeInterval);
    localStorage.setItem('latest Score', timeLeft);

    
    localStorage.setItem('initials', initials.value);
  
}

