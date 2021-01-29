// var startBtn = document.querySelector("#startBtn");

// Do I need to create a variable for the question and answer container?


$(document).ready(function() {

var questionCount = 0;    
var timer = 30;
var questionCount = 0;
var currentScore = 0;
var quizActive = false;

var questionBank = [
    {
    question:  "Variables are made up of:",
    answer: ["a vowel and consonant", "an object and a location", "a name and a value"],
    correctAnswer: "a name and a value",
    }, 

    {
    question:  "Which method displays data in the browser's console?",
    answer: ["alert", "console.log", "window.print"],
    correctAnswer: "console.log",
    }, 

    {
    question:  "What is the index of grapes in the following array: [oranges, grapes, apples]",
    answer: ["1", "2", "3"],
    correctAnswer: "1",
    } 

]

//This function adds the first question to the quiz.

function addContent() {
   
    //This selector adds the text of the question.
    $("#questionContent").text(questionBank[questionCount].question);

    //This for loop adds the buttons and text of each question choice. It also adds the class of "choice" for each button.
    for (i = 0; i < questionBank[questionCount].answer.length; i++) {
        var button = $("<button>");
        button.text(questionBank[questionCount].answer[i]);
        button.addClass("choice");
        button.val(questionBank[questionCount].answer[i])
        $("#answerContent").append(button);

    }
}

function checkAnswer() {
    console.log(choiceValue);
    console.log(questionCount);
}

// This event listens for users clicking the Start Quiz button.
$(".startBtn").on("click", function(){
    var countdown = setInterval(startCountdown, 1000);

    // This function starts the quiz timer. 
    function startCountdown() {
       $("#counter").text(timer);
       
       // Stops timer at 0
       if(timer === 0) {
        clearInterval(countdown);
      }
      timer--;
    }
    addContent();
})



$(document).on("click", ".choice", function (){
    var choiceValue = $(this).val();
    
    console.log("Choice: " + choiceValue);
    console.log("Question Count: " + questionCount);


    if (choiceValue === questionBank[questionCount].correctAnswer){
        $("#validation").text("Correct!");
        currentScore++;
        console.log("current score: " + currentScore);
    } else {
        $("#validation").text("Sorry. That is wrong.");
        timer = timer - 5;
    }
    
    questionCount++;
  

}
)
});
