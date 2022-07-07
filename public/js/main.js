/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("const isMobile = {\r\n    Android: function () {\r\n        return navigator.userAgent.match(/Android/i);\r\n    },\r\n    BlackBerry: function () {\r\n        return navigator.userAgent.match(/BlackBerry/i);\r\n    },\r\n    IOS: function () {\r\n        return navigator.userAgent.match(/iPhone|iPad|iPod/i);\r\n    },\r\n    Opera: function () {\r\n        return navigator.userAgent.match(/Opera Mini/i);\r\n    },\r\n    Windows: function () {\r\n        return navigator.userAgent.match(/IEMobile/i);\r\n    },\r\n    any: function () {\r\n        return (\r\n            isMobile.Android() ||\r\n            isMobile.BlackBerry() ||\r\n            isMobile.IOS() ||\r\n            isMobile.Opera() ||\r\n            isMobile.Windows());\r\n    }\r\n};\r\n\r\nif (isMobile.any()) {\r\n    document.body.classList.add('_touch');\r\n    let menuArrows = document.querySelectorAll('.menu__arrow');\r\n    if (menuArrows.length > 0) {\r\n        for (let index = 0; index < menuArrows.length; index++) {\r\n            const menuArrow = menuArrows[index];\r\n            menuArrow.addEventListener(\"click\", function (e) {\r\n                menuArrow.parentElement.classList.toggle('_active');\r\n            });\r\n        }\r\n    }\r\n\r\n}else{\r\n    document.body.classList.add('_pc');\r\n}\r\n\r\n// burger menu - - - \r\n\r\nconst iconMenu = document.querySelector('.menu__icon');\r\nconst menuBody = document.querySelector('.menu__body');\r\nif (iconMenu) {\r\n    iconMenu.addEventListener(\"click\", function(e) {\r\n        document.body.classList.toggle('_lock');\r\n        iconMenu.classList.toggle('_active');\r\n        menuBody.classList.toggle('_active');\r\n    });\r\n}\r\n\r\n// navigation\r\n\r\nconst menuLinks = document.querySelectorAll('.menu__link[data-goto]');\r\nif (menuLinks.length > 0) {\r\n    menuLinks.forEach(menuLink => {\r\n        menuLink.addEventListener(\"click\", onMenuLinkClick);\r\n    });\r\n\r\n    function onMenuLinkClick(e) {\r\n        const menuLink = e.target;\r\n        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){\r\n            const gotoBlock = document.querySelector(menuLink.dataset.goto);\r\n            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;\r\n            \r\n            if (iconMenu.classList.contains('_active')) {\r\n                document.body.classList.remove('_lock');\r\n                iconMenu.classList.remove('_active');\r\n                menuBody.classList.remove('_active');\r\n            }\r\n            window.scrollTo({\r\n                top: gotoBlockValue,\r\n                behavior: \"smooth\"\r\n            });\r\n            e.preventDefault();\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://new-pr--gl/./src/js/main.js?");

/***/ }),

/***/ "./src/js/plagins.js":
/*!***************************!*\
  !*** ./src/js/plagins.js ***!
  \***************************/
/***/ (function() {

eval("// - - - Slick-Carousel - - - - \r\n// ---\r\n// import $ from \"jquery\";\r\n// import \"slick-carousel\";\r\n\r\n// $(\".carousel\").slick({\r\n//     dots: true\r\n// });\r\n\r\n\r\n// - - - Function - - -\r\n// $(function () {\r\n//     $('.header__btn-menu').on('click', function () {\r\n//         $('.menu__list').toggleClass('menu--open');\r\n//     });\r\n// });\n\n//# sourceURL=webpack://new-pr--gl/./src/js/plagins.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/plagins.js"]();
/******/ 	
/******/ })()
;