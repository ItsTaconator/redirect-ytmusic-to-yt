// ==UserScript==
// @name        Redirect YouTube Music Audio Links to YouTube
// @match       https://music.youtube.com/watch*
// @grant       none
// @version     1.0
// @author      Taconator
// @description 7/1/2025, 2:36:28 PM
// ==/UserScript==

window.location.href = window.location.href.replace("music.", "");
