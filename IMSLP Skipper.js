// ==UserScript==
// @name         IMSLP Skipper
// @namespace    http://github.com/PseudoResonance/
// @version      1.0
// @description  Skips IMSLP advertisements
// @author       PseudoResonance
// @match        *://imslp.org/wiki/Special:ImagefromIndex/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var wait = document.getElementById("sm_dl_wait");
    if (typeof(wait) != 'undefined' && wait != null) {
        var red;
        if (wait instanceof Array) {
            red = wait[0].getAttribute("data-id");
            if (red != window.location.href) {
                window.location.replace(red);
            }
        } else {
            red = wait.getAttribute("data-id");
            if (red != window.location.href) {
                window.location.replace(red);
            }
        }
    } else {
        var links = document.getElementsByClassName("body")[0].getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
            var link = links[i].getAttribute("href");
            var href = links[i].href;
            if (href != window.location.href) {
                if (href.toLowerCase().includes("disclaimer")) {
                    window.location.replace(href);
                }
            }
        }
    }
})();
