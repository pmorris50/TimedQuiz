//setting elements to variables so we can style
var body = document.body;
var headerEL = document.querySelectorAll("header");
var timerDisplay = document.querySelector(".timerdisplay")
var startButton = document.querySelector("#startbutton");
var quizQuestion = document.querySelector(".question");
var submitScore = document.querySelector(".form-container");
var hideTextAfterClick = document.querySelector('.StartQuiz');
var questionDisplay = document.querySelector("#question-container");
var choiceA = document.querySelector(".choiceA");
var choiceB = document.querySelector(".choiceB");
var choiceC = document.querySelector(".choiceC");
var choiceD = document.querySelector(".choiceD");
//need to test 10-13
//global var
var timeLeft = 60;
var currentQuestion = 0;
//need to test 19-23
body.appendChild(choiceA);
body.appendChild(choiceB);
body.appendChild(choiceC);
body.appendChild(choiceD);
body.appendChild(submitScore);
questionDisplay.appendChild(quizQuestion);

//initial styling to hide questions
questionDisplay.setAttribute("style", "display: none");
submitScore.setAttribute("style", "display: none");
choiceA.setAttribute("style", "display: none")
choiceB.setAttribute("style", "display: none")
choiceC.setAttribute("style", "display: none")
choiceD.setAttribute("style", "display: none")
//question array idk if I need this but I might
questionList = [question0, question1, question2, question3];



//question objects
var question0 = {
    question: "JavaScript is an ______ language",
    wrongAnswer1: ["A. Functional", false],
    rightAnswer: ["B. Object-Oriented", true],
    wrongAnswer2: ["C. Procedural", false],
    wrongAnswer3: ["D. Scripted", false]
};

var question1 = {
    question: "You can store data in JavaScript in?",
    wrongAnswer1: ["A. Objects", false],
    wrongAnswer2: ["B. Arrays", false],
    wrongAnswer3: ["C. Variables", false],
    rightAnswer: ["D. All of the above", true]

};
var question2 = {
    question: "Which function is used to turn an object into a string?",
    rightAnswer: ["A. stringify()", true],
    wrongAnswer1: ["B. parse()", false],
    wrongAnswer2: ["C. convert()", false],
    wrongAnswer3: ["D. None of the above", false]
};
var question3 = {
    question: "Which function is used to turn an object into a string?",
    rightAnswer: ["A. stringify()", true],
    wrongAnswer1: ["B. parse()", false],
    wrongAnswer2: ["C. convert()", false],
    wrongAnswer3: ["D. None of the above", true]
};


//hide/show divs 
function startQuiz() {
    hideTextAfterClick.setAttribute("style", "display: none"); //hides div that contains start button and description
    questionDisplay.setAttribute("style", "display: block");
    choiceA.setAttribute("style", "display: block");
    choiceB.setAttribute("style", "display: block");
    choiceC.setAttribute("style", "display: block");
    choiceD.setAttribute("style", "display: block");


}


//eventlistener on click button
startButton.addEventListener("click", function () {
    countdown();
    startQuiz();
});
//timer that counts down from 60 
function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerDisplay.textContent = "Time: " + timeLeft;
            timeLeft--;
        }
        else {
            timerDisplay.textContent = "Time is up";
            clearInterval(timeInterval);
        }
    }, 1000);
}



function displayQuestion() {
    quizQuestion.textContent = "hello";
}
displayQuestion(1);