// var startBtn = document.querySelector("#startBtn");

var timer = 30;

$(".startBtn").on("click", function(){
    console.log("The button works");
    var countdown = setInterval(startCountdown, 1000);

    function startCountdown() {
       $("#counter").text(timer);
       timer--;
      }

})