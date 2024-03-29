// ==UserScript==
// @name         Vocaloid_wiki_一致
// @namespace    
// @version      1.0
// @description  Songs or artists search on Vocaloid_wiki.
// @author       sing0421
// @match        http*://*/*
// @grant        none
// @updateURL	 
// @run-at       context-menu
// ==/UserScript==

(function() {
    'use strict';

    let gs = window.getSelection();
    let selected_text = gs.toString();

    if(gs == "" ) {
        return;
    }

    window.open("https://w.atwiki.jp/hmiku/search?andor=and&keyword=" + selected_text + "&andor=and&cmp=cmp");
})();
