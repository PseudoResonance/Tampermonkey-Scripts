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

    var links = document.getElementsByTagName("a");
    var i;
    for (i = 0; i < links.length; i++) {
        var link = links[i];
        var href = link.getAttribute("href");
        if (href != null && href.length > 0) {
            if (href.includes("IMSLPDisclaimerAccept")) {
                window.location.replace(href);
            }
        }
    }
    var span = document.getElementById("sm_dl_wait");
    var download = span.getAttribute("data-id");
    if (download != null && download.length > 0) {
        window.location.replace(download);
    }
})();
