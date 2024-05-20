/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["InstanceButton"] = factory();
	else
		root["InstanceButton"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/instance-button/instance-button.html":
/*!*************************************************************!*\
  !*** ./src/components/instance-button/instance-button.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<style>\\r\\n    button {\\r\\n        border: 1px solid transparent;\\r\\n        padding: 10px 20px;\\r\\n        font-size: 16px;\\r\\n        font-weight: 700;\\r\\n        cursor: pointer;\\r\\n        border-radius: 6px;\\r\\n    }\\r\\n\\r\\n    button.primary {\\r\\n        background-color: #e91e63;\\r\\n        color: white;\\r\\n        border-color: #e91e63;\\r\\n    }\\r\\n\\r\\n    button.primary:hover {\\r\\n        background-color: #c01754;\\r\\n    }\\r\\n\\r\\n    button.secondary {\\r\\n        background-color: transparent;\\r\\n        color: #e91e63;\\r\\n        border-color: #e91e63;\\r\\n    }\\r\\n\\r\\n    button.secondary:hover,\\r\\n    button.tertiary:hover,\\r\\n    button.ghost:hover {\\r\\n        background-color: #f2f2f2;\\r\\n    }\\r\\n\\r\\n    button.tertiary {\\r\\n        background-color: transparent;\\r\\n        color: black;\\r\\n        border-color: black;\\r\\n    }\\r\\n\\r\\n    button.ghost {\\r\\n        background-color: transparent;\\r\\n        color: #e91e63;\\r\\n        border: transparent;\\r\\n    }\\r\\n    \\r\\n    .loading {\\r\\n        display: none;\\r\\n    }\\r\\n</style>\\r\\n    \\r\\n\\r\\n<button>\\r\\n    <slot></slot>\\r\\n    <span class=\\\"loading\\\">Loading...</span>\\r\\n</button>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://instance-ui/./src/components/instance-button/instance-button.html?");

/***/ }),

/***/ "./src/components/instance-button/instance-button.js":
/*!***********************************************************!*\
  !*** ./src/components/instance-button/instance-button.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _instance_button_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance-button.html */ \"./src/components/instance-button/instance-button.html\");\n\r\n\r\nclass InstanceButton extends HTMLElement {\r\n    static get observedAttributes() {\r\n        return [\"appearance\", \"loading\", \"disabled\"];\r\n    }\r\n\r\n    constructor() {\r\n        super();\r\n        this.attachShadow({ mode: \"open\" });\r\n        this.shadowRoot.innerHTML = _instance_button_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\r\n        const button = this.shadowRoot.querySelector(\"button\");\r\n\r\n        if (!this.hasAttribute(\"appearance\")) {\r\n            button.className = \"primary\";\r\n        }\r\n    }\r\n\r\n    attributeChangedCallback(name, oldValue, newValue) {\r\n        const button = this.shadowRoot.querySelector(\"button\");\r\n        const loadingSpan = this.shadowRoot.querySelector(\".loading\");\r\n\r\n        if (name === \"appearance\") {\r\n            button.className = newValue;\r\n        }\r\n\r\n        if (name === \"loading\") {\r\n            loadingSpan.style.display = newValue != null ? \"inline\" : \"none\";\r\n        }\r\n\r\n        if (name === \"disabled\") {\r\n            loadingSpan.style.display = newValue != null ? \"inline\" : \"none\";\r\n        }\r\n    }\r\n}\r\n\r\ncustomElements.define(\"instance-button\", InstanceButton);\r\n\n\n//# sourceURL=webpack://instance-ui/./src/components/instance-button/instance-button.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/instance-button/instance-button.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});