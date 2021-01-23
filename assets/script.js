// var startBtn = document.querySelector("#startBtn");

var timer = 30;

function addContent() {
    $("#quizContent").text("My Quiz");
}

$(".startBtn").on("click", function(){
    console.log("The button works");
    var countdown = setInterval(startCountdown, 1000);

    function startCountdown() {
       $("#counter").text(timer);
       timer--;
      }

    addContent();

})