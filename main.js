var screenDisplay = document.getElementById("firstDiv");
var [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
var timer = null;

function allTiming() {
    milliseconds++;
    if (milliseconds == 10) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    var hrs = hours < 10 ? "0" + hours : hours;
    var min = minutes < 10 ? "0" + minutes : minutes;
    var sec = seconds < 10 ? "0" + seconds : seconds;
    var ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    screenDisplay.innerHTML = hrs + ":" + min + ":" + sec + ":" + ms;
}

document.getElementById("btn1").addEventListener("click", function () {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(allTiming, 100);
});

document.getElementById("btn2").addEventListener("click", function () {
    clearInterval(timer);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    screenDisplay.innerHTML = "00:00:00:00";
});

document.getElementById("btn3").addEventListener("click", function () {
    clearInterval(timer);
});
