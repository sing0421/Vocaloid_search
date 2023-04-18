// ==UserScript==
// @name         niconico_get_sm
// @namespace    
// @version      1.1
// @description  We get sm_number of video in niconico.
// @author       sing0421
// @match        http*://*/*
// @grant        none
// @updateURL	 
// @run-at       context-menu
// ==/UserScript==

(function() {
    'use strict';

    var url = location.href.split("/");
    var sm = url[url.length -1];

    if(sm == "" ) {
        return;
    }

    navigator.clipboard.writeText(sm);
})();
