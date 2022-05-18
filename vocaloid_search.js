// ==UserScript==
// @name         Vocaloid_wiki
// @version      1.0
// @description  Songs or artists search on Vocaloid_wiki.
// @author       sing0421
// ==/UserScript==

(function() {
    'use strict';

    let gs = window.getSelection();
    let selected_text = gs.toString();
    let selected_text_new = selected_text.replace(' ','+')

    if(gs == "" ) {
        return;
    }

    window.open("https://w.atwiki.jp/hmiku/search?andor=and&keyword=" + selected_text);
})();