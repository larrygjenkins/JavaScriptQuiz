$(document).ready(function() {

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

var highScores = [
    {
        initials: "LJ",
        score: "3"
    }
]

//This function displays the quiz questions.
function addContent() {
   
    if ((questionCount < questionBank.length) && (timer > 0)) {
    //This selector adds the text of the question.
    $("#questionContent").text(questionBank[questionCount].question);

    //This for loop adds the buttons and text of each question choice. It also adds the class of "choice" for each button.
        for (i = 0; i < questionBank[questionCount].answer.length; i++) {
            var button = $("<button>");
            button.text(questionBank[questionCount].answer[i]);
            button.addClass("choice btn btn-secondary");
            // button.addClass("btn btn-secondary");
            button.val(questionBank[questionCount].answer[i])
            $("#answerContent").append(button);
        }
    }

    else {
        $("#questionContent").text("The quiz is done! You scored " + currentScore + " points.");
        $("#questionContent").addClass("done");
        $(".resetQuiz").addClass("visible").removeClass("hidden");
        $(".highScoreHistory").addClass("visible").removeClass("hidden");
        timer = 0;
    }

}

// This event listens for users clicking the Start Quiz button.
$(".startBtn").on("click", function(){
    var countdown = setInterval(startCountdown, 1000);

    // This function starts the quiz timer. 
    function startCountdown() {
       $("#counter").text(timer);
       
       // Stops timer at 0
       if(timer <= 0) {
        clearInterval(countdown);

        //This removes all question/choice content when timer reaches 0 and adds the Quiz Done message. Try Again button also displays after timer reaches 0.
        $("#questionContent").text("The quiz is done! You scored " + currentScore + " points.");
        $("#questionContent").addClass("done");
        $("#answerContent").text("");
        $("#validation").text(""); 
        $(".resetQuiz").addClass("visible").removeClass("hidden");
        $(".highScoreHistory").addClass("visible").removeClass("hidden");
        $(".startBtn").addClass("hidden").removeClass("visible");
      }
      
      //This begins the timer decrementing by 1 second. 
      timer--;

      //This hides the Start Quiz button once quiz has begun.
      $(".startBtn").addClass("hidden").removeClass("visible");

    }
    //Then we call the function to add the first test question. 
    addContent();
})


//this section listens for the user to click on a "choice" button when answering a question
$(document).on("click", ".choice", function (){
    var choiceValue = $(this).val();
    
    console.log("Choice: " + choiceValue);

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
            if (timer >= 5) {
                timer = timer - 5;
            }
            else {
                timer = 0;
            }
        
    }
    //This updates the internal question count (the number of questions asked) by 1
    questionCount++;
    console.log("Question Count: " + questionCount);
    clearQuestion();
})

//This function clears the question and choices associated with the previous question before adding new content. 
function clearQuestion() {
     $("#questionContent").text("");
     $("#answerContent").text("");
     addContent();
}

$(".resetQuiz").on("click", function(){   
    $(".resetQuiz").addClass("hidden").removeClass("visible");
    $(".highScoreHistory").addClass("hidden").removeClass("visible");
    $(".startBtn").addClass("visible").removeClass("hidden");
    $("#questionContent").removeClass("done");
    $("#questionContent").text("");
    $("#answerContent").text("");
    timer = 15;
    questionCount = 0;
    currentScore = 0;
    $("#counter").text(timer);
    $("#score").text(currentScore);
 })

// function enterInitials() {
    
//     console.log(userInitials.text);
// }

//When the user clicks the Submit button for intials, this event listener takes the current score and user inputed intials and adds them to the current array of high scores. 
$(".submitInitials").on("click", function(event){
    event.preventDefault();
    
    //first variable identifies initials by element id; second variable takes current score and converts it to a string
    var userInitials = document.getElementById("userInitials");
    var newScore = currentScore.toString();

    //this creates the newScore variable, which is the object that will be pushed into the highScores array.
    var newScore = {"initials": userInitials.value, "score": newScore};
    highScores.push(newScore);
    console.log(highScores);
})

// function endQuiz() {
//      //Assumes we have obtained initials from user and storing intials and score in an object; and then pushing to the high scores Array

//      localStorage.setItem("highScores", JSON.stringify(highScores));

// }
//     endQuiz();
//     var test = JSON.parse(localStorage.getItem("highScores"));
//     console.log(test);

 });
