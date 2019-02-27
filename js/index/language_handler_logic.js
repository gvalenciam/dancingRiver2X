var set_locale_to = function(locale) {

    if (locale) {
        $.i18n().locale = locale;
    }
    $('body').i18n();

};

var language="en";

$.i18n().load( {
    'en': './i18n/en.json',
    'ru': './i18n/ru.json',
    'es': './i18n/es.json'
} ).done(function() {
    set_locale_to(language);
});

History.Adapter.bind(window, 'statechange', function(){
    set_locale_to(language);
});

var flag ="./img/us.png";
var bandera = document.getElementById("bandera");

function myFunction() {

    var selectedLanguage = document.getElementById("idiom").value;

        if(selectedLanguage === "English"){
            language = "en";
            flag="./img/language-flag-images/us.png";
        }

    if(selectedLanguage === "Spanish"){
        language = "es";
        flag="./img/language-flag-images/es.png";
    }

    set_locale_to(language);
    bandera.src = flag;

}