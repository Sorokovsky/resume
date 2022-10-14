/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./docs/js/script.min.js":
/*!*******************************!*\
  !*** ./docs/js/script.min.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n(()=>{\"use strict\";var e,o;document.querySelector(\".header\"),document.querySelector(\".burger\"),document.querySelector(\".menu\"),console.log(!0),e=function(e){1==e?document.querySelector(\"body\").classList.add(\"webp\"):document.querySelector(\"body\").classList.add(\"no-webp\")},(o=new Image).onload=o.onerror=function(){e(2==o.height)},o.src=\"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\"})();\n\n//# sourceURL=webpack://gulp/./docs/js/script.min.js?");

/***/ }),

/***/ "./src/js/modules/functions.js":
/*!*************************************!*\
  !*** ./src/js/modules/functions.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closePopub\": () => (/* binding */ closePopub),\n/* harmony export */   \"headerScroll\": () => (/* binding */ headerScroll),\n/* harmony export */   \"isWebp\": () => (/* binding */ isWebp),\n/* harmony export */   \"mobileMenu\": () => (/* binding */ mobileMenu),\n/* harmony export */   \"openPopub\": () => (/* binding */ openPopub),\n/* harmony export */   \"paralaxOnMove\": () => (/* binding */ paralaxOnMove)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/js/modules/variables.js\");\n\r\nfunction openPopub(popub) {\r\n    if (!popub.classList.contains('_active')) {\r\n        popub.classList.add('_active');\r\n    }\r\n}\r\nfunction closePopub(popub) {\r\n    if (popub.classList.contains('_active')) {\r\n        popub.classList.remove('_active');\r\n    }\r\n}\r\nvar burgerToggle = function () {\r\n    if (_variables_js__WEBPACK_IMPORTED_MODULE_0__.burger.classList.contains(\"_active\")) {\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__.burger.classList.remove(\"_active\");\r\n        document.body.classList.remove(\"_lock\");\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__.burger.children[0].classList.remove(\"_active\");\r\n        closePopub(_variables_js__WEBPACK_IMPORTED_MODULE_0__.menu);\r\n    }\r\n    else if (!_variables_js__WEBPACK_IMPORTED_MODULE_0__.burger.classList.contains(\"_active\")) {\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__.burger.classList.add(\"_active\");\r\n        document.body.classList.add(\"_lock\");\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__.burger.children[0].classList.add(\"_active\");\r\n        openPopub(_variables_js__WEBPACK_IMPORTED_MODULE_0__.menu);\r\n    }\r\n};\r\nvar mobileMenu = function () {\r\n    if (window.innerWidth <= 991) {\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__.burger.addEventListener('click', burgerToggle);\r\n    }\r\n};\r\nfunction paralaxOnMove(paralax) {\r\n    if (window.innerWidth >= 991) {\r\n        var centerX_1 = window.innerWidth / 2, centerY_1 = window.innerHeight / 2, paralaxX_1 = 30, speed_1 = 0.23, paralaxY_1 = -30;\r\n        paralax.style.transform = \"translate(\".concat(paralaxX_1, \"px, \").concat(paralaxY_1, \"px)\");\r\n        document.addEventListener('mousemove', function (e) {\r\n            if (e.clientX < centerX_1) {\r\n                paralaxX_1 = paralaxX_1 - speed_1;\r\n            }\r\n            else if (e.clientX > centerX_1) {\r\n                paralaxX_1 = paralaxX_1 + speed_1;\r\n            }\r\n            if (e.clientY > centerY_1) {\r\n                paralaxY_1 = paralaxY_1 + speed_1;\r\n            }\r\n            else if (e.clientY < centerY_1) {\r\n                paralaxY_1 = paralaxY_1 - speed_1;\r\n            }\r\n            paralax.style.transform = \"translate(\".concat(paralaxX_1, \"px, \").concat(paralaxY_1, \"px)\");\r\n            centerY_1 = e.clientY;\r\n            centerX_1 = e.clientX;\r\n        });\r\n    }\r\n}\r\nvar headerScroll = function () {\r\n    headerFix();\r\n    document.addEventListener('scroll', headerFix);\r\n};\r\nfunction headerFix() {\r\n    var headerHeight = Number(window.getComputedStyle(_variables_js__WEBPACK_IMPORTED_MODULE_0__.header, null).getPropertyValue(\"height\").replace(\"px\", \"\")) / 2;\r\n    if (window.scrollY > headerHeight) {\r\n        console.log(window.scrollY >= headerHeight);\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__.header.classList.add(\"fixed\");\r\n    }\r\n    else {\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__.header.classList.remove(\"fixed\");\r\n    }\r\n}\r\nfunction isWebp() {\r\n    function testWebP(callback) {\r\n        var webP = new Image();\r\n        webP.onload = webP.onerror = function () {\r\n            callback(webP.height == 2);\r\n        };\r\n        webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n    }\r\n    testWebP(function (support) {\r\n        if (support == true) {\r\n            document.querySelector('body').classList.add('webp');\r\n        }\r\n        else {\r\n            document.querySelector('body').classList.add('no-webp');\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://gulp/./src/js/modules/functions.js?");

/***/ }),

/***/ "./src/js/modules/variables.js":
/*!*************************************!*\
  !*** ./src/js/modules/variables.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"burger\": () => (/* binding */ burger),\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nvar header = document.querySelector('.header'), burger = document.querySelector('.burger'), menu = document.querySelector('.menu');\r\n\n\n//# sourceURL=webpack://gulp/./src/js/modules/variables.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/js/modules/functions.js\");\n\r\nconsole.log(true);\r\n(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp)();\r\n\n\n//# sourceURL=webpack://gulp/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./docs/js/script.min.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;