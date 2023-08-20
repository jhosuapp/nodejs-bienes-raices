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

/***/ "./sources/js/modules/map.js":
/*!***********************************!*\
  !*** ./sources/js/modules/map.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst map = (()=>{\r\n\r\n    //CONFIG MAP\r\n    const mapConfig = ()=>{\r\n        const lat = 4.6078063;\r\n        const lng = -74.1341417;\r\n        const map = L.map('map').setView([lat, lng ], 16);\r\n        let marker;\r\n    \r\n        //USER PROVIDER GEOCODER\r\n        const geocodeService = L.esri.Geocoding.geocodeService();\r\n    \r\n        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\r\n            attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\r\n        }).addTo(map);\r\n    \r\n        //CONFIG PIN\r\n        marker = new L.marker([lat, lng], {\r\n            draggable: true,\r\n            autoPan: true\r\n        }).addTo(map);\r\n    \r\n        //GET LAT AND LNG\r\n        marker.on('moveend', function(e){\r\n            marker = e.target;\r\n            const position = marker.getLatLng();\r\n    \r\n            map.panTo(new L.LatLng(position.lat, position.lng));\r\n            //GET INFO \r\n            geocodeService.reverse().latlng(position, 13).run(function(err, res){\r\n                const { Address } = res?.address;\r\n                const { lat, lng } = res?.latlng\r\n                marker.bindPopup(res.address?.LongLabel);\r\n                //SET VALUES AND TEXT DINAMIC\r\n                document.querySelector('#set-street').textContent = Address;\r\n                document.querySelector('#street').value = Address;\r\n                document.querySelector('#lat').value = lat;\r\n                document.querySelector('#lng').value = lng;\r\n            });\r\n        });    \r\n    }\r\n\r\n    //SET IMAGE FOR FIX ERROR NOT FOUND SOURCE\r\n    const mapSetImage = ()=>{\r\n        const getImageDot = document.querySelector('.leaflet-marker-icon');\r\n        const getImageDotShadow = document.querySelector('.leaflet-marker-shadow');\r\n        getImageDot.src = '/images/svg/location-dot.svg';\r\n        getImageDotShadow.src = '/images/svg/location-dot.svg';\r\n    }\r\n\r\n    //RETURN FUNCIONTS WITH GLOBAL SCOPE\r\n    return {\r\n        setHandleEvent: function(){\r\n            try { mapConfig(); } catch (error) { }\r\n            try { mapSetImage(); } catch (error) { }\r\n        }\r\n    }\r\n\r\n})();\r\n\r\n//EXECUTE GLOBAL FUNCTIONS\r\nwindow.addEventListener('load', ()=>{\r\n    map.setHandleEvent();\r\n});\r\n\r\n\n\n//# sourceURL=webpack://nodejs-bienes-raices/./sources/js/modules/map.js?");

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
/******/ 	__webpack_modules__["./sources/js/modules/map.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;