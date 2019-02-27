var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
var videoFooter = document.getElementById("videoFooter");
var droneVideoOverlay = document.getElementById("droneVideoOverlay");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

function myFunctionClose() {
    // video.style.display = "none";
    // videoFooter.style.display = "none";
    video.pause();
    video.currentTime = 0;
    btn.innerHTML = "Play";

    $("#droneVideoOverlay").fadeOut(350, function () {

    });

}