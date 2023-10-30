// ==UserScript==
// @name         niconico_get_info_tool
// @namespace    https://github.com/sing0421
// @version      1.0.1
// @description  Get info of vocaloid music
// @author       sing0421
// @match        https://w.atwiki.jp/hmiku/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let title = document.querySelector('span');
    let perstr = document.querySelector('a');
    let prostr = "";
    console.log(title)

    document.querySelectorAll("iframe").forEach((elem) => {
        console.log(elem);

        if (elem.src.querySelector("https://ext.nicovideo.jp")) {
            let columns = [];
            elem.querySelectorAll("p").forEach((lis) => {
                columns.push(lis.innerText);
            });
        }
    });

    let copytext = title + " / " + perstr + " - " + prostr;
    console.log(copytext);

    iframe.addEventListener('click', () => {
        copyTextToClipboard(copytext);
    });
})();


function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text)
    .then(function() {
      console.log('Async: Copying to clipboard was successful.');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
}
