// var startBtn = document.querySelector("#startBtn");

var timer = 30;
var questionBank = [
    {
    Question:  "Variables are made up of:",
    Answer: ["a vowel and consonant", "an object and a location", "a name and a value"],
    correctAnswer: "a name and a value",
    }, 

    {
    Question:  "Which method displays data in the browser's console?",
    Answer: ["alert", "console.log", "window.print"],
    correctAnswer: "console.log",
    }, 

    {
    Question:  "What is the index of grapes in the following array: [oranges, grapes, apples]",
    Answer: ["1", "2", "3"],
    correctAnswer: "1",
        } 

]

function addContent() {
    $("#quizContent").text("My Quiz");
}

$(".startBtn").on("click", function(){
    console.log("The button works");
    var countdown = setInterval(startCountdown, 1000);

    function startCountdown() {
       $("#counter").text(timer);
       timer--;

       // Stops timer at 0

       if(timer === 0) {
        clearInterval(countdown);
      }

    addContent();

}})