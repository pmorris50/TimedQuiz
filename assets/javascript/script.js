//setting elements to variables so we can style
var headerEL = document.querySelectorAll("header");
var timerDisplay = document.querySelector(".timerdisplay")
var startButton= document.querySelector("button");
//var gameDescription =document.querySelector("#description");
var hideText = document.querySelector('.beforeClick');
var questionDisplay = document.querySelector("#question-container"); 
//creating elements on index.html;
var body = document.body;
var description = document.createElement('p');
var question = document.createElement('ul');
var A = document.createElement("li");
var B = document.createElement("li");  
var C = document.createElement("li"); 
var D = document.createElement("li");

//appendChilds to display
hideText.appendChild(description);
questionDisplay.appendChild(question);
questionDisplay.appendChild(A);
questionDisplay.appendChild(B);
questionDisplay.appendChild(C);
questionDisplay.appendChild(D)
//added text content
description.textContent = 'Time will start when you click the "Start Quiz" button! 15 seconds will be deducted for a wrong answer. Your score is your time left';
question.textContent = "what is the question";
A.textContent ="is this even real";
B.textContent = "";
C.textContent ="";
D.textContent="";

//styling for quesitondisplay
questionDisplay.setAttribute("style", "display: none");




//question objects
var question1 ={
    question: "JavaScript is an ______ language",
    wrongAnswer1: "A. Functional",
    rightAnswer: "B. Object-Oriented",
    wrongAnswer2: "C. Procedural",
    wrongAnswer3: "D. Scripted"
}

var question2 ={
    question: "You can store data in JavaScript in?",
    wrongAnswer1: "A. Objects",
    wrongAnswer2: "B. Arrays",
    wrongAnswer3: "C. Variables",
    rightAnswer: "D. All of the above"

}
var question3 ={
    question: "Which function is used to turn an object into a string?",
    rightAnswer: "A. stringify()",
    wrongAnswer1: "B. parse()",
    wrongAnswer2: "C. convert()",
    wrongAnswer3: "D. None of the above"
}
var question4 ={
    question: "Which function is used to turn an object into a string?",
    rightAnswer: "A. stringify()",
    wrongAnswer1: "B. parse()",
    wrongAnswer2: "C. convert()",
    wrongAnswer3: "D. None of the above"
}






//eventlistener on click button
startButton.addEventListener("click", function(){
    countdown();
    hideText.style.display = "none"; //hides div that contains start button and description
    questionDisplay.setAttribute("style", "display: block");
});
//timer that counts down from 60 
function countdown(){
    var timeLeft = 60;
    var timeInterval = setInterval(function(){
        if(timeLeft >1 ){
            timerDisplay.textContent = "Time: " + timeLeft;
            timeLeft --;
        } 
        else{
            timerDisplay.textContent = "Time is up";
            clearInterval(timeInterval);
        }
    }, 1000);
}

