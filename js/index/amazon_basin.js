$(document).ready(function() {

    $("#bodyMain").on("scroll", function () {

        /*console.log(document.getElementById("Intro").clientHeight);*/

        if($("#bodyMain").scrollTop() > document.getElementById("Intro").clientHeight){

            document.getElementById("Header").classList.remove("header-style1");
            document.getElementById("Header").classList.add("header-style2");

            document.getElementById("logo-header").classList.remove("header-text-logo1");
            document.getElementById("logo-header").classList.add("header-text-logo2");

            document.getElementById("h_text1").classList.remove("header-text1");
            document.getElementById("h_text1").classList.add("header-text2");

            document.getElementById("h_text2").classList.remove("header-text1");
            document.getElementById("h_text2").classList.add("header-text2");


        }else if($("#bodyMain").scrollTop() < document.getElementById("Intro").clientHeight){

            document.getElementById("Header").classList.remove("header-style2");
            document.getElementById("Header").classList.add("header-style1");

            document.getElementById("logo-header").classList.remove("header-text-logo2");
            document.getElementById("logo-header").classList.add("header-text-logo1");

            document.getElementById("h_text2").classList.remove("header-text2");
            document.getElementById("h_text2").classList.add("header-text1");

            document.getElementById("h_text1").classList.remove("header-text2");
            document.getElementById("h_text1").classList.add("header-text1");

        }
    });

    /*document.getElementById("button_esp").addEventListener("click", function(){
        document.getElementById("button_esp").className = "lg-button1";
        document.getElementById("button_eng").className = "lg-button2";

    });
    document.getElementById("button_eng").addEventListener("click", function(){
        document.getElementById("button_eng").className = "lg-button1";
        document.getElementById("button_esp").className = "lg-button2";
    });
*/


    /* var cont = setInterval(myTimer, 1000);
    function myTimer() {

        $("#parag1").fadeIn(2000);
        document.getElementById("parag1").innerHTML = "El Amazonas es el río más caudaloso del mundo";
        $("#parag1").delay(3000).fadeOut(1000);
    }*/

    /*var message = "El Amazonas es el río más caudaloso del mundo";*/



/*
    document.getElementById("paragraph1").innerHTML = "El Amazonas es el río más caudaloso del mundo";
    function FadeText() {
        $("#paragraph1").fadeOut(1000);
        /!*$("#parag1").html(message).fadeIn(2000).delay(3000);*!/
        $("#paragraph1").fadeIn(2000).delay(3000);
    }
    FadeText();
    setInterval(FadeText, 6000);
*/



});













