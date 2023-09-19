/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblinPNG.png
const goblinPNG_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/app.js

const field = document.querySelectorAll(".field");
function intervalFunc() {
  let currNumb = 0;
  const goblin = `<img src='${goblinPNG_namespaceObject}' class="goblin" alt="goblin"></img>`;
  setInterval(() => {
    let randNumb = Math.floor(Math.random() * field.length);
    field[currNumb].innerHTML = "";
    if (currNumb !== randNumb) {
      currNumb = randNumb;
      field[currNumb].insertAdjacentHTML("beforeend", goblin);
    } else {
      while (currNumb === randNumb) {
        randNumb = Math.floor(Math.random() * field.length);
      }
      currNumb = randNumb;
      field[currNumb].insertAdjacentHTML("beforeend", goblin);
    }
  }, 1000);
}
intervalFunc();
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;