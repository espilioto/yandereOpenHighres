// ==UserScript==
// @name         Open fullscreen
// @namespace    http://tampermonkey.net/
// @version      2026-01-01
// @description  for lazy people
// @author       SouLSLayeR
// @match        https://yande.re/post/show/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yande.re
// @grant        none
// @downloadURL  https://github.com/espilioto/yandereOpenHighres/raw/refs/heads/main/yandereOpenHighres.user.js
// @updateURL    https://github.com/espilioto/yandereOpenHighres/raw/refs/heads/main/yandereOpenHighres.user.js
// @homepage     https://github.com/espilioto/yandereOpenHighres
// ==/UserScript==

(function () {
  'use strict';

  const highres = document.querySelector('#highres');
  const menu = document.querySelector('#main-menu');

  if (!highres || !menu) return;
  if (document.querySelector('#open-fullsize')) return;

  const link = document.createElement('a');
  link.id = 'open-fullsize';
  link.href = highres.href;
  link.textContent = '🖥️ Open fullsize';

  menu.appendChild(link);
})();