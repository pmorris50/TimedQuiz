//setting elements to variables so we can style
var headerEL = document.querySelectorAll("header");
var timerDisplay = document.querySelector(".timerdisplay")
var startButton= document.querySelector("button");



//creating elements on index.html;
var body = document.body;
var question = document.createElement('ul');
var A1 = document.createElement("li");
var B1 = document.createElement("li");  
var C1 = document.createElement("li"); 
var D1 = document.createElement("li");


//inputting timer function to timerDisplay
//timerDisplay.textContent = "Time Left: " + "return time" //this is where the return for timer function goes

question = 'Favorite Food?';
A1.textContent = "Apples 🍎 ";
B1.textContent = "Pizza 🍕 ";
C1.textContent = "Dumplings 🥟 ";
D1.textContent = "Cupcakes 🧁 ";

// appendChild to display all question and answer choide//




//set CSS styling


var questionOne ={
    question: '',
    answerA: '',
    answerB: '',
    answerC: '',
    answerD: ''

}
//eventlistener on click button
startButton.addEventListener("click", function(){
    countdown();
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
