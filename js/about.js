'use strict';

import Strings from "../languages/strings.js";

/////////////////////////////////////////////
// VARIABLES ////////////////////////////////
/////////////////////////////////////////////

const COOKIE = new Cookie( document );
const STRINGS = new Strings( COOKIE.getCookie( "locale" ) );
const HTML = new Html( document, STRINGS, STRINGS.websiteName, STRINGS.about );

let localeEnButton = document.querySelector("#websiteConfigLocaleEn");
let localeEsButton = document.querySelector("#websiteConfigLocaleEs");
let themeLightButton = document.querySelector("#websiteConfigThemeLight");
let themeDarkButton = document.querySelector("#websiteConfigThemeDark");

/////////////////////////////////////////////
// SCRIPT ///////////////////////////////////
/////////////////////////////////////////////

if ( COOKIE.getCookie( "locale" ) == "es" ) localeEsButton.disabled = true;
else localeEnButton.disabled = true;

if ( COOKIE.getCookie( "theme" ) == "dark" ) themeDarkButton.disabled = true;
else themeLightButton.disabled = true;

localeEnButton.addEventListener("click", () => switchLanguage( "en" ));
localeEsButton.addEventListener("click", () => switchLanguage( "es" ));

themeLightButton.addEventListener("click", () => switchTheme( "light" ));
themeDarkButton.addEventListener("click", () => switchTheme( "dark" ));

document.querySelector("#modalCancel").addEventListener("click", () => HTML.modal.hideModal());
document.querySelector("#websiteConfigRestoreButton").addEventListener("click", () => resetCookies());

/////////////////////////////////////////////
// FUNCTIONS ////////////////////////////////
/////////////////////////////////////////////

function switchTheme( theme_code ) {
    COOKIE.setCookie( "theme", theme_code, 7 );
    location.reload();
}

function switchLanguage( language_code ) {
    COOKIE.setCookie( "locale", language_code, 7 );
    location.reload();
}

function resetCookies() {
    HTML.modal.showQuestionModal( STRINGS.resetCookiesHead, STRINGS.resetCookiesBody, STRINGS.apply, STRINGS.cancel );
    document.querySelector("#modalApply").addEventListener("click", () => {
        HTML.cookie.resetCookies();
        location.reload();
    });
}