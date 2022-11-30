//setting elements to variables so we can style
var headerEL = document.querySelectorAll("header");
var timerDisplay = document.querySelector(".timerdisplay")



//creating elements on index.html;
var body = document.body;
var question = document.createElement('ul');
var A1 = document.createElement("li");
var B1 = document.createElement("li");  
var C1 = document.createElement("li"); 
var D1 = document.createElement("li");


//inputting timer function to timerDisplay
timerDisplay.textContent = "Time Left: " + "return time" //this is where the return for timer function goes

question = 'Favorite Food?';
A1.textContent = "Apples 🍎 ";
B1.textContent = "Pizza 🍕 ";
C1.textContent = "Dumplings 🥟 ";
D1.textContent = "Cupcakes 🧁 ";

// appendChild to display all question and answer choide//




//set CSS styling

highScoresEl.setAttrubute('style', 'text-decoration: none;')

var questionOne ={
    question: '',
    answerA: '',
    answerB: '',
    answerC: '',
    answerD: ''

}
