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

function switchLanguage(countryCode) {
    set_locale_to(countryCode);
}