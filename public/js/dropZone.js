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

/***/ "./sources/js/modules/drop-zone.js":
/*!*****************************************!*\
  !*** ./sources/js/modules/drop-zone.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst dropZone = (()=>{\r\n\r\n    //CONFIG\r\n    const configDropZone = ()=>{\r\n        const getMsgErrorGeneral = document.querySelector('.msg-error');\r\n        const getDropZone = document.querySelector('#drop-zone input');\r\n        const allowExtensions = ['jpg', 'png', 'webp', 'jpeg'];\r\n        const allowSize = 1000000;\r\n        const getMsgError = document.querySelector('#render-error p');\r\n        const image = document.querySelector('#render-image');\r\n        const getRemoveImage = document.querySelector('#remove-image');\r\n\r\n        const reUseError = (msg)=>{\r\n            getMsgError.classList.add('active');\r\n            getMsgError.textContent = msg;\r\n            getDropZone.value = '';\r\n        }\r\n        \r\n        getDropZone.addEventListener('change', function(){\r\n            //Get file\r\n            const getFile = getDropZone.files[0];\r\n            //Reset src image\r\n            image.src = '';\r\n            \r\n            //Validate extensiones asset\r\n            const splitExtension = getFile?.name.split('.');\r\n            const getExtension =  splitExtension?.pop();\r\n            if(allowExtensions.includes(getExtension)){\r\n                //Validate size asset\r\n                if(getFile.size >= allowSize){\r\n                    reUseError(`El peso no puede ser mayor a ${allowSize / allowSize}MB`);\r\n                }else{\r\n                    //Render preview asset\r\n                    image.src = URL.createObjectURL(getFile);\r\n                    getMsgError.classList.remove('active');\r\n                    getRemoveImage.classList.add('active');\r\n                    getMsgErrorGeneral.classList.add('hidden');\r\n                }\r\n            }else{\r\n                reUseError('Las extensiones permitidas son: jpg, png, webp y jpeg');\r\n            }\r\n        });\r\n\r\n        //Remove image\r\n        getRemoveImage.addEventListener('click', ()=>{\r\n            image.src = '';\r\n            dropZone.value = '';\r\n            getRemoveImage.classList.remove('active');\r\n        });\r\n    }\r\n\r\n    //VALIDATE FORM\r\n    const validateFormDropZone = ()=>{\r\n        const getForm = document.querySelector('form');\r\n        const getMsgError = document.querySelector('.msg-error');\r\n        const getInputFile = document.querySelector('#drop-zone input');\r\n        getForm.addEventListener('submit', (e)=>{\r\n            if(!getInputFile.value.length){\r\n                e.preventDefault();\r\n                getMsgError.classList.remove('hidden');\r\n            }\r\n        });\r\n    }\r\n\r\n    \r\n    //RETURN FUNCIONTS WITH GLOBAL SCOPE\r\n    return {\r\n        setHandleEvent : function(){\r\n            try{\r\n                configDropZone();\r\n                validateFormDropZone();\r\n            }catch(err){ console.log(err) }\r\n        }\r\n    }\r\n})();\r\n\r\n//EXECUTE GLOBAL FUNCTIONS\r\nwindow.addEventListener('load', ()=>{\r\n    dropZone.setHandleEvent();\r\n});\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://nodejs-bienes-raices/./sources/js/modules/drop-zone.js?");

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
/******/ 	__webpack_modules__["./sources/js/modules/drop-zone.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;