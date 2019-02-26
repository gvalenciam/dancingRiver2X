var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {

    rangeBullet.innerHTML = rangeSlider.value;
    var numberOfYears = 8;
    var bulletPosition = Math.abs(rangeSlider.min - rangeSlider.value)/4;
    var bulletMargin = 0;

    for (var i = 0; i < numberOfYears; i++){

        if(i === bulletPosition){
            bulletMargin = [(window.innerWidth - 10 - 10 - 65)/(numberOfYears - 1) - 10]*bulletPosition;
        }

    }

    rangeBullet.style.left = bulletMargin + "px";

    //Change River polygons

}
