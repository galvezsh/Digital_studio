'use strict';

import Strings from "../languages/strings.js";

/////////////////////////////////////////////
// VARIABLES ////////////////////////////////
/////////////////////////////////////////////

const STRINGS = new Strings( new Cookie( document ).getCookie( "locale" ) );
const HTML = new Html( document, STRINGS, STRINGS.websiteName, STRINGS.start );

/////////////////////////////////////////////
// SCRIPT ///////////////////////////////////
/////////////////////////////////////////////

/////////////////////////////////////////////
// FUNCTIONS ////////////////////////////////
/////////////////////////////////////////////
