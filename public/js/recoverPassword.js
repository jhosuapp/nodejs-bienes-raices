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

/***/ "./sources/js/modules/recover-password.js":
/*!************************************************!*\
  !*** ./sources/js/modules/recover-password.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst recoverPassword = (()=>{\r\n    //CONFIG\r\n    const configRecoverPass = ()=>{\r\n        const getFormRecoverPass = document.querySelector('#form-recover-password');\r\n        const getEmail = document.querySelector('#form-recover-password #email');\r\n\r\n        getFormRecoverPass && getFormRecoverPass.addEventListener('submit', (e)=>{\r\n            if(getEmail.value != ''){\r\n                localStorage.setItem('emailUser', getEmail.value);\r\n            }\r\n        });\r\n    }\r\n    \r\n    //RETURN FUNCIONTS WITH GLOBAL SCOPE\r\n    return {\r\n        getChildsRecoverPassword : function(){\r\n            try{\r\n                configRecoverPass();\r\n            }catch(err){  }\r\n        }\r\n    }\r\n})();\r\n\r\n//EXECUTE GLOBAL FUNCTIONS\r\nwindow.addEventListener('load', ()=>{\r\n    recoverPassword.getChildsRecoverPassword();\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://nodejs-bienes-raices/./sources/js/modules/recover-password.js?");

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
/******/ 	__webpack_modules__["./sources/js/modules/recover-password.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;