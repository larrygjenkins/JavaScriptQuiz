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

       // Stops timer at 0

       if(timer === 0) {
        clearInterval(countdown);
      }

    addContent();

}})