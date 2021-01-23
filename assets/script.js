// var startBtn = document.querySelector("#startBtn");

// Do I need to create a variable for the question and answer container?


$(document).ready(function() {

var questionCount = 0;    
var timer = 30;
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

function addContent() {
    // $("#quizContent").text("My Quiz");
    // for (i = 0; i < questionBank.length; i++) {

    // }
    $("#questionContent").text(questionBank[questionCount].question);

    for (i = 0; i < questionBank[questionCount].answer.length; i++) {
        var button = $("<button>");
        button.text(questionBank[questionCount].answer[i]);
        button.addClass("choice");
        button.val(questionBank[questionCount].answer[i])
        $("#answerContent").append(button);

    }
}

// This event listens for users clicking the Start Quiz button.
$(".startBtn").on("click", function(){
    console.log("The button works");
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
    console.log(choiceValue);
    questionCount++;
}
)
});
