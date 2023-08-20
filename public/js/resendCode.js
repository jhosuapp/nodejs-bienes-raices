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

/***/ "./sources/js/modules/resend-code.js":
/*!*******************************************!*\
  !*** ./sources/js/modules/resend-code.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst ResendCode = (()=>{\r\n    //CONFIG\r\n    const configRecoverPass = ()=>{\r\n        const getEmailForm = document.querySelector('#form-resend-code #email');\r\n        const getFormResendCode = document.querySelector('#form-resend-code');\r\n        getEmailForm && (getEmailForm.value = localStorage.getItem('emailUser'));\r\n\r\n        getFormResendCode && getFormResendCode.addEventListener('submit', ()=>{\r\n            localStorage.removeItem('emailUser');\r\n        });\r\n    }\r\n\r\n    //VALIDATE EMAIL IN LOCALSTORAGE\r\n    const redirectRecoverPass = ()=>{\r\n        if(!localStorage.getItem('emailUser')){\r\n            window.location.href = '/auth/login';\r\n        }\r\n    }\r\n    \r\n    //RETURN FUNCTIONS GLOBAL SCOPE\r\n    return {\r\n        setHandleEvent : function(){\r\n            try{\r\n                configRecoverPass();\r\n            }catch(err){  }\r\n            try{\r\n                redirectRecoverPass();\r\n            }catch(err){  }\r\n        }\r\n    }\r\n})();\r\n\r\n//EXCEUTE GLOBAL FUNCTIONS\r\nwindow.addEventListener('load', ()=>{\r\n    ResendCode.setHandleEvent();\r\n});\n\n//# sourceURL=webpack://nodejs-bienes-raices/./sources/js/modules/resend-code.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./sources/js/modules/resend-code.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;