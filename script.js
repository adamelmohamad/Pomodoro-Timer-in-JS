    var countDownTime = 1500;
    function countDownTimer() {
        var hours = parseInt( countDownTime / 3600 ) % 24;
        var minutes = parseInt( countDownTime / 60 ) % 60;
        var seconds = countDownTime % 60;
        var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);
        document.getElementById('timerContents').innerHTML = result;
        if(countDownTime == 0 ){ countDownTime = 60*60*60; }
        countDownTime--;
        setTimeout(function(){ countDownTimer() }, 1000);
    }
    countDownTimer();
 
 function pause() {
countDownTime++;
setTimeout(function(){ pause() }, 1000);

 }


 function play(){
countDownTime--;
setTimeout(function(){ play() }, 1000);
 }

 function reset(){
    document.location.reload();
 }

 function openGithub() {
    document.location.href="https://github.com/adamelmohamad/Pomodoro-Timer-in-JS";
 }