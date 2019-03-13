$(document).ready(function() {

    var portal ="amazon_basin";
    const urlParams = new URLSearchParams(window.location.search);
    const temp = urlParams.get('portal');

    var temp_1 = document.getElementsByTagName("template")[0];
    var temp_2 = document.getElementsByTagName("template")[1];
    var temp_3 = document.getElementsByTagName("template")[2];
    var temp_4 = document.getElementsByTagName("template")[3];


    var title1= "AMAZON BASIN";
    var title2= "DANCING RIVERS";
    var paragraph1= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n" +
        "                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n" +
        "                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    var paragraph2= "ABCDEFGHIJK Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n" +
        "                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n" +
        "                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    var imgCard1 = './img/bottom-cards-images/card_1.JPG';
    var imgCard2 = './img/bottom-cards-images/card_2.JPG';
    var imgCard3 = './img/bottom-cards-images/card_3.JPG';

    var mainImg = './img/web_river.PNG';
    var rightImg = './img/peru_region.PNG';



    var textCard1_1= "ECOSISTEMA AMAZÓNICO";
    var textCard2_1= "PROYECTOS";
    var textCard3_1= "EDUCACIÓN";
    var textCard1_2= "ABCDEFG";
    var textCard2_2= "HIJKLM";
    var textCard3_2= "MNOPQRS";
    var middleTitle1 = "PORTALES";
    var middleTitle2 = "PORTALES 2";
    var rightTitle1_1 = "DANCING RIVERS";
    var rightTitle1_2 = "DANCING RIVERS2";

    var rightText1_1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n" +
        "                        ut labore et dolore magna aliqua. ";
    var rightText1_2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n" +
        "                        ut labore et dolore magna aliqua. ";
    var rightTitle2_1 = "RIVER RESEARCH";
    var rightTitle2_2 = "RIVER RESEARCH2";

    var rightText2_1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n" +
        "                        ut labore et dolore magna aliqua.";
    var rightText2_2 = "SADADAS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n" +
        "                        ut labore et dolore magna aliqua.";


    var title = title1;
    var paragraph = paragraph1;
    var imgCard1 = imgCard1;
    var textCard1 = textCard1_1;
    var imgCard2 = imgCard2;
    var textCard2 = textCard2_1;
    var imgCard3 = imgCard3;
    var textCard3 = textCard3_1;
    var middleTitle = middleTitle1;
    var mainImg = mainImg;
    var rightImg = rightImg;
    var rightTitleTop = rightTitle1_1;
    var rightTextTop = rightText1_1;
    var rightTitleDown = rightTitle2_1;
    var rightText2Down = rightText2_1;



    var showTemp1 = true;
    var showTemp2 = true;
    var showTemp3 = true;


    switch(temp) {
        case "amazon_basin":
            console.log("amazon_basin");
            title = title1;
            paragraph = paragraph1;
            imgCard1 = imgCard1;
            textCard1 = textCard1_1;
            imgCard2 = imgCard2;
            textCard2 = textCard2_1;
            imgCard3 = imgCard3;
            textCard3 = textCard3_1;
            middleTitle = middleTitle1;
            mainImg = mainImg;
            rightImg = rightImg;
            rightTitleTop = rightTitle1_1;
            rightTextTop = rightText1_1;
            rightTitleDown = rightTitle2_1;
            rightText2Down = rightText2_1;

            showTemp1 = true;
            showTemp2 = true;
            showTemp3 = true;

            break;
        case "dancing_rivers":
            console.log("dancing_rivers");

            title = title2;
            paragraph = paragraph2;
            imgCard1 = imgCard1;
            textCard1 = textCard1_2;
            imgCard2 = imgCard2;
            textCard2 = textCard2_2;
            imgCard3 = imgCard3;
            textCard3 = textCard3_2;
            middleTitle = middleTitle2;
            mainImg = mainImg;
            rightImg = rightImg;
            rightTitleTop = rightTitle1_2;
            rightTextTop = rightText1_2;
            rightTitleDown = rightTitle2_2;
            rightText2Down = rightText2_2;

            showTemp1 = true;
            showTemp2 = true;
            showTemp3 = true;

            break;


        default:
            console.log("default");
            title = title1;
            paragraph = paragraph1;
            imgCard1 = imgCard1;
            textCard1 = textCard1_1;
            imgCard2 = imgCard2;
            textCard2 = textCard2_1;
            imgCard3 = imgCard3;
            textCard3 = textCard3_1;
            middleTitle = middleTitle1;
            mainImg = mainImg;
            rightImg = rightImg;
            rightTitleTop = rightTitle1_1;
            rightTextTop = rightText1_1;
            rightTitleDown = rightTitle2_1;
            rightText2Down = rightText2_1;

            showTemp1 = true;
            showTemp2 = true;
            showTemp3 = true;

    }




    temp_1.content.getElementById("titlePag_temp1").innerHTML = title;
    temp_1.content.getElementById("introParagraph_temp1").innerHTML = paragraph;

    var clon_1 = temp_1.content;
    document.getElementById("section1").appendChild(clon_1);


    temp_2.content.getElementById("imgCard1_temp2").src = imgCard1;
    temp_2.content.getElementById("textCard1_temp2").innerHTML = textCard1;
    temp_2.content.getElementById("imgCard2_temp2").src = imgCard2;
    temp_2.content.getElementById("textCard2_temp2").innerHTML = textCard2;
    temp_2.content.getElementById("imgCard3_temp2").src = imgCard3;
    temp_2.content.getElementById("textCard3_temp2").innerHTML = textCard3;

    var clon_2 = temp_2.content.cloneNode(true);
    document.getElementById("section2").appendChild(clon_2);

    temp_3.content.getElementById("middleTitle_temp3").innerHTML = middleTitle;
    temp_3.content.getElementById("mainImg_temp3").src = mainImg;
    temp_3.content.getElementById("rightImg_temp3").src = rightImg;
    temp_3.content.getElementById("rightSubTitle1_temp3").innerHTML = rightTitleTop;
    temp_3.content.getElementById("rightSubText1_temp3").innerHTML = rightTextTop;
    temp_3.content.getElementById("rightSubTitle2_temp3").innerHTML = rightTitleDown;
    temp_3.content.getElementById("rightSubText2_temp3").innerHTML = rightText2Down;

    var clon_3 = temp_3.content.cloneNode(true);
    document.getElementById("section3").appendChild(clon_3);



    temp_4.content.getElementById("popupForm1_title").innerHTML = "ECOSISTEMA AMAZÓNICO";

    temp_4.content.getElementById("popupForm1_paragraph").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e\n" +
        "                                t dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm\n" +
        "                                odo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n" +
        "                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    temp_4.content.getElementById("popupForm1_center_text").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e\n" +
        "                                    t dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm\n" +
        "                                    odo consequat.";

    temp_4.content.getElementById("popupForm1_title").innerHTML = "ECOSISTEMA AMAZÓNICO";

    var clon_4 = temp_4.content.cloneNode(true);
    document.getElementById("section4").appendChild(clon_4);





    $("#card_btn_1").click(function(){
        document.getElementById("myNav").style.width = "100%";
        // $("#div1").fadeIn();
        // $("#div2").fadeIn("slow");
        $("#popup_ecosystem").fadeIn(2000);
    });
    $("#card_btn_2").click(function(){
        document.getElementById("myNav").style.width = "100%";
        // $("#div1").fadeIn();
        // $("#div2").fadeIn("slow");
        $("#popup_proyects").fadeIn(2000);
    });
    $("#card_btn_3").click(function(){
        document.getElementById("myNav").style.width = "100%";
        // $("#div1").fadeIn();
        // $("#div2").fadeIn("slow");
        $("#popup_education").fadeIn(2000);
    });


    $(".close_button").click(function(){
        document.getElementById("myNav").style.width = "0%";
        document.getElementById("popup_ecosystem").style.display="none";
        document.getElementById("popup_proyects").style.display="none";
        document.getElementById("popup_education").style.display="none";

    });



});








