// ==UserScript==
// @name         niconico_get_sm
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  We get sm_number of video in niconico
// @author       sing0421
// @match        https://www.nicovideo.jp/
// @grant        none
// @updateURL	 https://github.com/sing0421/Vocaloid_search/raw/master/niconico_get_sm.js
// @run-at       context-menu
// ==/UserScript==

// Copyright 2022 sing0421

(function() {
    'use strict';

    var url = location.href.split("/");
    var sm = url[url.length -1];

    if(sm == "" ) {
        return;
    }

    navigator.clipboard.writeText(sm);
})();
