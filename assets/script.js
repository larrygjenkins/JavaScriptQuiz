// var startBtn = document.querySelector("#startBtn");

// Do I need to create a variable for the question and answer container?


$(document).ready(function() {

var questionCount = 0;    
var timer = 15;
var questionCount = 0;
var currentScore = 0;

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

//This function displays the quiz questions.
function addContent() {
   
    if ((questionCount < questionBank.length) || (timer > 0)) {
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

    else {
        $("#questionContent").text("The quiz is done!");
        $("#questionContent").addClass("done");
        $(".resetQuiz").addClass("visible");
    }

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

        //This removes all question/choice content when timer reaches 0 and adds the Quiz Done message.
        $("#questionContent").text("The quiz is done!");
        $("#questionContent").addClass("done");
        $("#answerContent").text("");
        $("#validation").text(""); 
      }
      
      //This begins the timer decrementing by 1 second. 
      timer--;

      //This hides the Start Quiz button once quiz has begun.
      $(".startBtn").addClass("hidden");

    }
    //Then we call the function to add the first test question. 
    addContent();
})


//this section listens for the user to click on a "choice" button when answering a question
$(document).on("click", ".choice", function (){
    var choiceValue = $(this).val();
    
    console.log("Choice: " + choiceValue);
    console.log("Question Count: " + questionCount);

    //if the user answers correctly, they see a validation message that it is correct and they receive 1 point.
    if (choiceValue === questionBank[questionCount].correctAnswer){
        $("#validation").text("Correct!");
        currentScore++;
        $("#score").text(currentScore);
        console.log("current score: " + currentScore);
    } 
    
    //if the user answers incorrectly, they see "wrong" validation and lose 5 seconds from timer.
    else {
        $("#validation").text("Sorry. That is wrong.");
        timer = timer - 5;
    }
    //This updates the internal question count (the number of questions asked) by 1
    questionCount++;
    clearQuestion();
})

//This function clears the question and choices associated with the previous question before adding new content. 
function clearQuestion() {
     $("#questionContent").text("");
     $("#answerContent").text("");
     addContent();
}


});
