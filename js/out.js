/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function(){\n\t\n\tlet game = document.querySelector(\".gameWindow\")\n\tlet piece = game.querySelectorAll(\"div\");\n\tlet pos = 0;\n\tlet emptypiece;\n\tlet url = \"./images/1.jpg\";\n\tconst hint = document.querySelector(\".hintWindow\");\n\tlet classList = [ \"empty\", \"puzzle2\", \"puzzle3\", \"puzzle4\", \"puzzle11\", \"puzzle12\", \"puzzle13\", \"puzzle14\", \"puzzle21\", \"puzzle22\", \"puzzle23\", \"puzzle24\", \"puzzle31\", \"puzzle32\", \"puzzle33\", \"puzzle34\"];\n\t\n\n\tfunction removeClasses () {\n\t\tfor (let i = 0; i < piece.length; i++) {\n\t\t\tpiece[i].classList.remove(piece[i].classList[0]);\n\t\t\tpiece[i].style.backgroundImage = \"\";\n\t\t\tpiece[i].style.backgroundSize = \"\";\n\t\t\tpiece[i].style.backgroundColor = \"\";\n\t\t\t}\n\t\t}\n\n\tfunction randomClasses () {\n\t\tlet numberOcuppied = [];\n\t\t\n\t\tfor (let i = 0; i< piece.length; i++) {\n\t\t\tpiece[i].style.backgroundImage = \"\";\n\t\t\tpiece[i].style.backgroundSize = \"\";\n\t\t\tpiece[i].style.backgroundColor = \"\";\n\t\t\tif(piece[i].classList.length == 1) {\n\n\t\t\t\tpiece[i].classList.remove(piece[i].classList[0]);\n\t\t\t}\n\t\t}\n\t\t\n\t\twhile (numberOcuppied.length < 16) {\n\t\t\tlet classNum = Math.floor(Math.random()*16);\n\t\t\tif (numberOcuppied.indexOf(classNum) == -1) {\n\t\t\t\tpiece[numberOcuppied.length].classList.add(classList[classNum]);\n\t\t\t\tnumberOcuppied.push(classNum);\n//\t\t\t\t\n//\t\t\t\tgetPicture();\n\t\t\t}\n\t\t}\n\t}\n\n\tfunction start () {\n\t\tfor (let i = 0; i < piece.length; i++) {\n\t\t\tpiece[i].addEventListener(\"click\", function(event){\n\t\t\t\tlet n = [...piece].indexOf(event.target);\n\t\t\t\tlet empty = document.querySelector(\".empty\");\n\t\t\t\tlet emptyIndex = [...piece].indexOf(empty);\n\t\t\t\tif (emptyIndex + 1 == n || emptyIndex + 4 == n || emptyIndex - 1 == n || emptyIndex - 4 == n) {\n\t\t\t\t\tempty.classList.remove(empty.classList[0]);\n\t\t\t\t\tempty.classList.add(event.target.classList[0]);\n\t\t\t\t\tevent.target.classList.add(\"empty\");\n\t\t\t\t\tevent.target.classList.remove(event.target.classList[0]);\n\n\t\t\t\t\tfor(let i = 0; i<piece.length; i++) {\n\t\t\t\t\t\tpiece[i].style.backgroundImage = `url(` + url + `)`;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\temptypiece = game.querySelector(\".empty\");\n\t\t\t\t\temptypiece.style.backgroundImage = \"none\";\n\t\t\t\t\temptypiece.style.backgroundColor = \"white\";\n\n\t\t\t\t\t} else {\n\t\t\t\t\t\t\n\t\t\t\t\tconsole.log(\"nie ma go tutaj\");\n\t\t\t\t}\n\t\t\t})\n\t\t}\n\t}\n\t\n\tfunction getPicture (selectedVal) {\n\t\tswitch (selectedVal) {\n\t\t\tcase \"1\":\n\t\t\t\turl = \"./images/1.jpg\";\n\t\t\t\tbreak;\n\t\t\tcase \"2\":\n\t\t\t\turl = \"./images/2.jpg\";\n\t\t\t\tbreak;\n\t\t\tcase \"3\":\n\t\t\t\turl = \"./images/3.jpg\";\n\t\t\t\tbreak;\n\t\t}\n\t\t\n\t\tfor(let i = 0; i < piece.length; i++) {\n\t\t\tpiece[i].style.backgroundImage = `url(` + url + `)`;\n\t\t\tpiece[i].style.backgroundSize = '400px';\n\t\t}\n\t\temptypiece = document.querySelector(\".empty\");\n\t\temptypiece.style.backgroundImage = \"none\";\n\t\t\n\t\thint.style.backgroundImage = `url(` + url + `)`;\n\t\thint.style.backgroundSize = 'cover';\t\t\n\t}\t\n\t\n\tfunction defaultClassesOrder () {\n\t\tfor (let i = 0 ; i < piece.length; i ++) {\n\t\t\tpiece[i].classList.add(classList[i]);\n\t\t}\n\t}\n\t\n\n\tconst select = document.querySelector(\".picSelect\");\n\tlet selectedVal = select.value;\n\n\tselect.addEventListener(\"change\", function(){\n\t\tselectedVal = select.value;\n\t\tremoveClasses();\n\t\tdefaultClassesOrder();\n\t\tgetPicture(selectedVal);\n\t})\n\n\tconst startBtn = document.querySelector(\".startBtn\");\n\tstartBtn.addEventListener(\"click\", function(){\n\t\tremoveClasses();\n\t\trandomClasses();\n\t\tgetPicture(selectedVal);\n\t\tstart();\n\t})\n\n\tdefaultClassesOrder();\n\tgetPicture(selectedVal);\n\n})\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNOztBQUVOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0M7QUFDQSxFOztBQUVBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XG5cdFxuXHRsZXQgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZVdpbmRvd1wiKVxuXHRsZXQgcGllY2UgPSBnYW1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG5cdGxldCBwb3MgPSAwO1xuXHRsZXQgZW1wdHlwaWVjZTtcblx0bGV0IHVybCA9IFwiLi9pbWFnZXMvMS5qcGdcIjtcblx0Y29uc3QgaGludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGludFdpbmRvd1wiKTtcblx0bGV0IGNsYXNzTGlzdCA9IFsgXCJlbXB0eVwiLCBcInB1enpsZTJcIiwgXCJwdXp6bGUzXCIsIFwicHV6emxlNFwiLCBcInB1enpsZTExXCIsIFwicHV6emxlMTJcIiwgXCJwdXp6bGUxM1wiLCBcInB1enpsZTE0XCIsIFwicHV6emxlMjFcIiwgXCJwdXp6bGUyMlwiLCBcInB1enpsZTIzXCIsIFwicHV6emxlMjRcIiwgXCJwdXp6bGUzMVwiLCBcInB1enpsZTMyXCIsIFwicHV6emxlMzNcIiwgXCJwdXp6bGUzNFwiXTtcblx0XG5cblx0ZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcyAoKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwaWVjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0cGllY2VbaV0uY2xhc3NMaXN0LnJlbW92ZShwaWVjZVtpXS5jbGFzc0xpc3RbMF0pO1xuXHRcdFx0cGllY2VbaV0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJcIjtcblx0XHRcdHBpZWNlW2ldLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJcIjtcblx0XHRcdHBpZWNlW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiXCI7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdGZ1bmN0aW9uIHJhbmRvbUNsYXNzZXMgKCkge1xuXHRcdGxldCBudW1iZXJPY3VwcGllZCA9IFtdO1xuXHRcdFxuXHRcdGZvciAobGV0IGkgPSAwOyBpPCBwaWVjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0cGllY2VbaV0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJcIjtcblx0XHRcdHBpZWNlW2ldLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJcIjtcblx0XHRcdHBpZWNlW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiXCI7XG5cdFx0XHRpZihwaWVjZVtpXS5jbGFzc0xpc3QubGVuZ3RoID09IDEpIHtcblxuXHRcdFx0XHRwaWVjZVtpXS5jbGFzc0xpc3QucmVtb3ZlKHBpZWNlW2ldLmNsYXNzTGlzdFswXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdHdoaWxlIChudW1iZXJPY3VwcGllZC5sZW5ndGggPCAxNikge1xuXHRcdFx0bGV0IGNsYXNzTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjE2KTtcblx0XHRcdGlmIChudW1iZXJPY3VwcGllZC5pbmRleE9mKGNsYXNzTnVtKSA9PSAtMSkge1xuXHRcdFx0XHRwaWVjZVtudW1iZXJPY3VwcGllZC5sZW5ndGhdLmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0W2NsYXNzTnVtXSk7XG5cdFx0XHRcdG51bWJlck9jdXBwaWVkLnB1c2goY2xhc3NOdW0pO1xuLy9cdFx0XHRcdFxuLy9cdFx0XHRcdGdldFBpY3R1cmUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBzdGFydCAoKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwaWVjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0cGllY2VbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KXtcblx0XHRcdFx0bGV0IG4gPSBbLi4ucGllY2VdLmluZGV4T2YoZXZlbnQudGFyZ2V0KTtcblx0XHRcdFx0bGV0IGVtcHR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbXB0eVwiKTtcblx0XHRcdFx0bGV0IGVtcHR5SW5kZXggPSBbLi4ucGllY2VdLmluZGV4T2YoZW1wdHkpO1xuXHRcdFx0XHRpZiAoZW1wdHlJbmRleCArIDEgPT0gbiB8fCBlbXB0eUluZGV4ICsgNCA9PSBuIHx8IGVtcHR5SW5kZXggLSAxID09IG4gfHwgZW1wdHlJbmRleCAtIDQgPT0gbikge1xuXHRcdFx0XHRcdGVtcHR5LmNsYXNzTGlzdC5yZW1vdmUoZW1wdHkuY2xhc3NMaXN0WzBdKTtcblx0XHRcdFx0XHRlbXB0eS5jbGFzc0xpc3QuYWRkKGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMF0pO1xuXHRcdFx0XHRcdGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZW1wdHlcIik7XG5cdFx0XHRcdFx0ZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFswXSk7XG5cblx0XHRcdFx0XHRmb3IobGV0IGkgPSAwOyBpPHBpZWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRwaWVjZVtpXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKGAgKyB1cmwgKyBgKWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGVtcHR5cGllY2UgPSBnYW1lLnF1ZXJ5U2VsZWN0b3IoXCIuZW1wdHlcIik7XG5cdFx0XHRcdFx0ZW1wdHlwaWVjZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIm5vbmVcIjtcblx0XHRcdFx0XHRlbXB0eXBpZWNlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIm5pZSBtYSBnbyB0dXRhalwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGdldFBpY3R1cmUgKHNlbGVjdGVkVmFsKSB7XG5cdFx0c3dpdGNoIChzZWxlY3RlZFZhbCkge1xuXHRcdFx0Y2FzZSBcIjFcIjpcblx0XHRcdFx0dXJsID0gXCIuL2ltYWdlcy8xLmpwZ1wiO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCIyXCI6XG5cdFx0XHRcdHVybCA9IFwiLi9pbWFnZXMvMi5qcGdcIjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiM1wiOlxuXHRcdFx0XHR1cmwgPSBcIi4vaW1hZ2VzLzMuanBnXCI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgcGllY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdHBpZWNlW2ldLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoYCArIHVybCArIGApYDtcblx0XHRcdHBpZWNlW2ldLnN0eWxlLmJhY2tncm91bmRTaXplID0gJzQwMHB4Jztcblx0XHR9XG5cdFx0ZW1wdHlwaWVjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW1wdHlcIik7XG5cdFx0ZW1wdHlwaWVjZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIm5vbmVcIjtcblx0XHRcblx0XHRoaW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoYCArIHVybCArIGApYDtcblx0XHRoaW50LnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcdFx0XG5cdH1cdFxuXHRcblx0ZnVuY3Rpb24gZGVmYXVsdENsYXNzZXNPcmRlciAoKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDAgOyBpIDwgcGllY2UubGVuZ3RoOyBpICsrKSB7XG5cdFx0XHRwaWVjZVtpXS5jbGFzc0xpc3QuYWRkKGNsYXNzTGlzdFtpXSk7XG5cdFx0fVxuXHR9XG5cdFxuXG5cdGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGljU2VsZWN0XCIpO1xuXHRsZXQgc2VsZWN0ZWRWYWwgPSBzZWxlY3QudmFsdWU7XG5cblx0c2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKXtcblx0XHRzZWxlY3RlZFZhbCA9IHNlbGVjdC52YWx1ZTtcblx0XHRyZW1vdmVDbGFzc2VzKCk7XG5cdFx0ZGVmYXVsdENsYXNzZXNPcmRlcigpO1xuXHRcdGdldFBpY3R1cmUoc2VsZWN0ZWRWYWwpO1xuXHR9KVxuXG5cdGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydEJ0blwiKTtcblx0c3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG5cdFx0cmVtb3ZlQ2xhc3NlcygpO1xuXHRcdHJhbmRvbUNsYXNzZXMoKTtcblx0XHRnZXRQaWN0dXJlKHNlbGVjdGVkVmFsKTtcblx0XHRzdGFydCgpO1xuXHR9KVxuXG5cdGRlZmF1bHRDbGFzc2VzT3JkZXIoKTtcblx0Z2V0UGljdHVyZShzZWxlY3RlZFZhbCk7XG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);