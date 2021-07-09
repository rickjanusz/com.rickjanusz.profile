module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/HomepageFeatures.js":
/*!********************************************!*\
  !*** ./src/components/HomepageFeatures.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomepageFeatures; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ \"gatsby-image\");\n/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/rjanusz/Sites/com.rickjanusz/frontend/src/components/HomepageFeatures.js\";\n\n // import gsap from 'gsap'\n// import { ScrollTrigger } from 'gsap/ScrollTrigger'\n// import Cloudy from '../components/Cloudy'\n\n // gsap.registerPlugin(ScrollTrigger)\n\nconst Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"HomepageFeatures__Wrap\",\n  componentId: \"sc-145s17l-0\"\n})([\"transition:var(--transition);section{display:flex;align-items:center;justify-content:center;.bg{width:100%;background-size:contain;}}\"]);\nconst H1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({\n  displayName: \"HomepageFeatures__H1\",\n  componentId: \"sc-145s17l-1\"\n})([\"position:absolute;margin:0;z-index:3;font:bold 8vw Arial,sans-serif;color:white;\"]);\nfunction HomepageFeatures({\n  features\n}) {\n  const feats = features[0]; // useEffect(() => {\n  //   const innerHeight = window.innerHeight\n  //   const bgs = [\n  //     feats.subBanner1.asset.fluid.src,\n  //     feats.subBanner2.asset.fluid.src,\n  //     feats.subBanner3.asset.fluid.src,\n  //   ]\n  //   gsap.utils.toArray('section').forEach((section, i) => {\n  //     section.bg = section.querySelector('.bg')\n  //     section.bg.style.backgroundImage = `url(${bgs[i]})`\n  //     if (i) {\n  //       section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`\n  //       gsap.to(section.bg, {\n  //         backgroundPosition: `50% ${innerHeight / 2}px`,\n  //         ease: 'none',\n  //         scrollTrigger: {\n  //           trigger: section,\n  //           scrub: true,\n  //         },\n  //       })\n  //     } else {\n  //       section.bg.style.backgroundPosition = '50% 0px'\n  //       gsap.to(section.bg, {\n  //         backgroundPosition: `50% ${innerHeight / 2}px`,\n  //         ease: 'none',\n  //         scrollTrigger: {\n  //           trigger: section,\n  //           start: 'top top',\n  //           end: 'bottom top',\n  //           scrub: true,\n  //         },\n  //       })\n  //     }\n  //   })\n  // }, [\n  //   feats.subBanner1.asset.fluid.src,\n  //   feats.subBanner2.asset.fluid.src,\n  //   feats.subBanner3.asset.fluid.src,\n  // ])\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrap, {\n    className: \"fullWidth\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: \"panel panel4\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(H1, {\n        children: feats.subHL3\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"feature bg\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          fluid: feats.subBanner3.asset.fluid,\n          alt: feats.subBanner3.asset.src\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 90,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lcGFnZUZlYXR1cmVzLmpzP2Y1YTQiXSwibmFtZXMiOlsiV3JhcCIsInN0eWxlZCIsImRpdiIsIkgxIiwiaDMiLCJIb21lcGFnZUZlYXR1cmVzIiwiZmVhdHVyZXMiLCJmZWF0cyIsInN1YkhMMyIsInN1YkJhbm5lcjMiLCJhc3NldCIsImZsdWlkIiwic3JjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtDQUdBO0FBQ0E7QUFDQTs7Q0FFQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNklBQVY7QUF3QkEsTUFBTUMsRUFBRSxHQUFHRix3REFBTSxDQUFDRyxFQUFWO0FBQUE7QUFBQTtBQUFBLHdGQUFSO0FBU2UsU0FBU0MsZ0JBQVQsQ0FBMEI7QUFBRUM7QUFBRixDQUExQixFQUF3QztBQUNyRCxRQUFNQyxLQUFLLEdBQUdELFFBQVEsQ0FBQyxDQUFELENBQXRCLENBRHFELENBR3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFDRSxxRUFBQyxJQUFEO0FBQU0sYUFBUyxFQUFDLFdBQWhCO0FBQUEsMkJBbUJFO0FBQVMsZUFBUyxFQUFDLGNBQW5CO0FBQUEsOEJBQ0UscUVBQUMsRUFBRDtBQUFBLGtCQUFLQyxLQUFLLENBQUNDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDRSxxRUFBQyxtREFBRDtBQUNFLGVBQUssRUFBRUQsS0FBSyxDQUFDRSxVQUFOLENBQWlCQyxLQUFqQixDQUF1QkMsS0FEaEM7QUFFRSxhQUFHLEVBQUVKLEtBQUssQ0FBQ0UsVUFBTixDQUFpQkMsS0FBakIsQ0FBdUJFO0FBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStCRCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hvbWVwYWdlRmVhdHVyZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgUmVhY3QgLyosIHsgdXNlRWZmZWN0IH0qLyBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG4vLyBpbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSAnZ3NhcC9TY3JvbGxUcmlnZ2VyJ1xuLy8gaW1wb3J0IENsb3VkeSBmcm9tICcuLi9jb21wb25lbnRzL0Nsb3VkeSdcbmltcG9ydCBJbWcgZnJvbSAnZ2F0c2J5LWltYWdlJ1xuLy8gZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKVxuXG5jb25zdCBXcmFwID0gc3R5bGVkLmRpdmBcbiAgLyogd2lkdGg6IDEwMHZ3OyAqL1xuICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgc2VjdGlvbiB7XG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLmJnIHtcbiAgICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgICAgIC8qIHRvcDogMDsgKi9cbiAgICAgIC8qIGxlZnQ6IDA7ICovXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgICAgIC8qIHotaW5kZXg6IDE7ICovXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyAqL1xuICAgICAgLyogYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgKi9cbiAgICB9XG4gIH1cbmBcbmNvbnN0IEgxID0gc3R5bGVkLmgzYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMDtcbiAgei1pbmRleDogMztcbiAgZm9udDogYm9sZCA4dncgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIC8qIHRleHQtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7ICovXG4gIGNvbG9yOiB3aGl0ZTtcbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZXBhZ2VGZWF0dXJlcyh7IGZlYXR1cmVzIH0pIHtcbiAgY29uc3QgZmVhdHMgPSBmZWF0dXJlc1swXVxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3QgaW5uZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgLy8gICBjb25zdCBiZ3MgPSBbXG4gIC8vICAgICBmZWF0cy5zdWJCYW5uZXIxLmFzc2V0LmZsdWlkLnNyYyxcbiAgLy8gICAgIGZlYXRzLnN1YkJhbm5lcjIuYXNzZXQuZmx1aWQuc3JjLFxuICAvLyAgICAgZmVhdHMuc3ViQmFubmVyMy5hc3NldC5mbHVpZC5zcmMsXG4gIC8vICAgXVxuICAvLyAgIGdzYXAudXRpbHMudG9BcnJheSgnc2VjdGlvbicpLmZvckVhY2goKHNlY3Rpb24sIGkpID0+IHtcbiAgLy8gICAgIHNlY3Rpb24uYmcgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5iZycpXG4gIC8vICAgICBzZWN0aW9uLmJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiZ3NbaV19KWBcblxuICAvLyAgICAgaWYgKGkpIHtcbiAgLy8gICAgICAgc2VjdGlvbi5iZy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBgNTAlICR7LWlubmVySGVpZ2h0IC8gMn1weGBcblxuICAvLyAgICAgICBnc2FwLnRvKHNlY3Rpb24uYmcsIHtcbiAgLy8gICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGA1MCUgJHtpbm5lckhlaWdodCAvIDJ9cHhgLFxuICAvLyAgICAgICAgIGVhc2U6ICdub25lJyxcbiAgLy8gICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gIC8vICAgICAgICAgICB0cmlnZ2VyOiBzZWN0aW9uLFxuICAvLyAgICAgICAgICAgc2NydWI6IHRydWUsXG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgfSlcbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgIHNlY3Rpb24uYmcuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJzUwJSAwcHgnXG5cbiAgLy8gICAgICAgZ3NhcC50byhzZWN0aW9uLmJnLCB7XG4gIC8vICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBgNTAlICR7aW5uZXJIZWlnaHQgLyAyfXB4YCxcbiAgLy8gICAgICAgICBlYXNlOiAnbm9uZScsXG4gIC8vICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAvLyAgICAgICAgICAgdHJpZ2dlcjogc2VjdGlvbixcbiAgLy8gICAgICAgICAgIHN0YXJ0OiAndG9wIHRvcCcsXG4gIC8vICAgICAgICAgICBlbmQ6ICdib3R0b20gdG9wJyxcbiAgLy8gICAgICAgICAgIHNjcnViOiB0cnVlLFxuICAvLyAgICAgICAgIH0sXG4gIC8vICAgICAgIH0pXG4gIC8vICAgICB9XG4gIC8vICAgfSlcbiAgLy8gfSwgW1xuICAvLyAgIGZlYXRzLnN1YkJhbm5lcjEuYXNzZXQuZmx1aWQuc3JjLFxuICAvLyAgIGZlYXRzLnN1YkJhbm5lcjIuYXNzZXQuZmx1aWQuc3JjLFxuICAvLyAgIGZlYXRzLnN1YkJhbm5lcjMuYXNzZXQuZmx1aWQuc3JjLFxuICAvLyBdKVxuXG4gIHJldHVybiAoXG4gICAgPFdyYXAgY2xhc3NOYW1lPVwiZnVsbFdpZHRoXCI+XG4gICAgICB7LyogPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwyXCI+XG4gICAgICAgIDxIMT57ZmVhdHMuc3ViSEwxfTwvSDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZSBiZ1wiPlxuICAgICAgICAgICA8SW1nXG4gICAgICAgICAgICBmbHVpZD17ZmVhdHMuc3ViQmFubmVyMS5hc3NldC5mbHVpZH1cbiAgICAgICAgICAgIGFsdD17ZmVhdHMuc3ViQmFubmVyMS5hc3NldC5zcmN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbDNcIj5cbiAgICAgICAgPEgxPntmZWF0cy5zdWJITDJ9PC9IMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlIGJnXCI+XG4gICAgICAgICAgPEltZ1xuICAgICAgICAgICAgZmx1aWQ9e2ZlYXRzLnN1YkJhbm5lcjIuYXNzZXQuZmx1aWR9XG4gICAgICAgICAgICBhbHQ9e2ZlYXRzLnN1YkJhbm5lcjIuYXNzZXQuc3JjfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPiAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsNFwiPlxuICAgICAgICA8SDE+e2ZlYXRzLnN1YkhMM308L0gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmUgYmdcIj5cbiAgICAgICAgICA8SW1nXG4gICAgICAgICAgICBmbHVpZD17ZmVhdHMuc3ViQmFubmVyMy5hc3NldC5mbHVpZH1cbiAgICAgICAgICAgIGFsdD17ZmVhdHMuc3ViQmFubmVyMy5hc3NldC5zcmN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9XcmFwPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/HomepageFeatures.js\n");

/***/ }),

/***/ "./src/components/SEO.js":
/*!*******************************!*\
  !*** ./src/components/SEO.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SEO; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ \"gatsby\");\n/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/rjanusz/Sites/com.rickjanusz/frontend/src/components/SEO.js\";\n\n\n // import { GOOGLE_KEY } from '../../config'\n\nfunction SEO({\n  children,\n  location,\n  description,\n  title,\n  image\n}) {\n  const {\n    site\n  } = Object(gatsby__WEBPACK_IMPORTED_MODULE_1__[\"useStaticQuery\"])(gatsby__WEBPACK_IMPORTED_MODULE_1__[\"graphql\"]`\n    query {\n      site {\n        siteMetadata {\n          title\n          description\n        }\n      }\n    }\n  `);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_helmet__WEBPACK_IMPORTED_MODULE_3__[\"Helmet\"], {\n    titleTemplate: `%s - ${site.siteMetadata.title}`,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"html\", {\n      lang: \"en\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n      rel: \"icon\",\n      type: \"image/svg+xml\",\n      href: \"favicon.svg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n      rel: \"alternate icon\",\n      href: \"favicon.ico\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width, initial-scale=1.0\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      charSet: \"utf-8\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"description\",\n      content: site.siteMetadata.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), location && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:url\",\n      content: location.href\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 20\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:image\",\n      content: image || '/logo.svg'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:title\",\n      content: title\n    }, \"ogtitle\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:site_name\",\n      content: site.siteMetadata.title\n    }, \"ogsitename\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:description\",\n      content: description\n    }, \"ogdesc\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), children]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TRU8uanM/MTE4NSJdLCJuYW1lcyI6WyJTRU8iLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJ0aXRsZSIsImltYWdlIiwic2l0ZSIsInVzZVN0YXRpY1F1ZXJ5IiwiZ3JhcGhxbCIsInNpdGVNZXRhZGF0YSIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFFZSxTQUFTQSxHQUFULENBQWE7QUFBRUMsVUFBRjtBQUFZQyxVQUFaO0FBQXNCQyxhQUF0QjtBQUFtQ0MsT0FBbkM7QUFBMENDO0FBQTFDLENBQWIsRUFBZ0U7QUFDN0UsUUFBTTtBQUFFQztBQUFGLE1BQVdDLDZEQUFjLENBQUNDLDhDQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQVRpQyxDQUEvQjtBQVVBLHNCQUNFLHFFQUFDLG1EQUFEO0FBQVEsaUJBQWEsRUFBRyxRQUFPRixJQUFJLENBQUNHLFlBQUwsQ0FBa0JMLEtBQU0sRUFBdkQ7QUFBQSw0QkFDRTtBQUFNLFVBQUksRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsZ0JBQVFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBSUU7QUFBTSxTQUFHLEVBQUMsTUFBVjtBQUFpQixVQUFJLEVBQUMsZUFBdEI7QUFBc0MsVUFBSSxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFO0FBQU0sU0FBRyxFQUFDLGdCQUFWO0FBQTJCLFVBQUksRUFBQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFPRTtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQXNCLGFBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFRRTtBQUFNLGFBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixlQVNFO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBeUIsYUFBTyxFQUFFRSxJQUFJLENBQUNHLFlBQUwsQ0FBa0JOO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixFQVdHRCxRQUFRLGlCQUFJO0FBQU0sY0FBUSxFQUFDLFFBQWY7QUFBd0IsYUFBTyxFQUFFQSxRQUFRLENBQUNRO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYZixlQVlFO0FBQU0sY0FBUSxFQUFDLFVBQWY7QUFBMEIsYUFBTyxFQUFFTCxLQUFLLElBQUk7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGLGVBYUU7QUFBTSxjQUFRLEVBQUMsVUFBZjtBQUEwQixhQUFPLEVBQUVEO0FBQW5DLE9BQThDLFNBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRixlQWNFO0FBQ0UsY0FBUSxFQUFDLGNBRFg7QUFFRSxhQUFPLEVBQUVFLElBQUksQ0FBQ0csWUFBTCxDQUFrQkw7QUFGN0IsT0FHTSxZQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRixlQW1CRTtBQUFNLGNBQVEsRUFBQyxnQkFBZjtBQUFnQyxhQUFPLEVBQUVEO0FBQXpDLE9BQTBELFFBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkYsRUFvQkdGLFFBcEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JEIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU0VPLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhcGhxbCwgdXNlU3RhdGljUXVlcnkgfSBmcm9tICdnYXRzYnknXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnXG4vLyBpbXBvcnQgeyBHT09HTEVfS0VZIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTRU8oeyBjaGlsZHJlbiwgbG9jYXRpb24sIGRlc2NyaXB0aW9uLCB0aXRsZSwgaW1hZ2UgfSkge1xuICBjb25zdCB7IHNpdGUgfSA9IHVzZVN0YXRpY1F1ZXJ5KGdyYXBocWxgXG4gICAgcXVlcnkge1xuICAgICAgc2l0ZSB7XG4gICAgICAgIHNpdGVNZXRhZGF0YSB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgKVxuICByZXR1cm4gKFxuICAgIDxIZWxtZXQgdGl0bGVUZW1wbGF0ZT17YCVzIC0gJHtzaXRlLnNpdGVNZXRhZGF0YS50aXRsZX1gfT5cbiAgICAgIDxodG1sIGxhbmc9XCJlblwiIC8+XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICB7LyoqIEZhdmljb25zICovfVxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgaHJlZj1cImZhdmljb24uc3ZnXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZSBpY29uXCIgaHJlZj1cImZhdmljb24uaWNvXCIgLz5cbiAgICAgIHsvKiBNZXRhICovfVxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3NpdGUuc2l0ZU1ldGFkYXRhLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgey8qKiBPcGVuIGdyYXBoICovfVxuICAgICAge2xvY2F0aW9uICYmIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17bG9jYXRpb24uaHJlZn0gLz59XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17aW1hZ2UgfHwgJy9sb2dvLnN2Zyd9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17dGl0bGV9IGtleT1cIm9ndGl0bGVcIiAvPlxuICAgICAgPG1ldGFcbiAgICAgICAgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIlxuICAgICAgICBjb250ZW50PXtzaXRlLnNpdGVNZXRhZGF0YS50aXRsZX1cbiAgICAgICAga2V5PVwib2dzaXRlbmFtZVwiXG4gICAgICAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSBrZXk9XCJvZ2Rlc2NcIiAvPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvSGVsbWV0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SEO.js\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default, query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomePage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"query\", function() { return query; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ \"gatsby\");\n/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SEO */ \"./src/components/SEO.js\");\n/* harmony import */ var _components_HomepageFeatures__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HomepageFeatures */ \"./src/components/HomepageFeatures.js\");\n\n\nvar _jsxFileName = \"/Users/rjanusz/Sites/com.rickjanusz/frontend/src/pages/index.js\";\n\n\n\n\nfunction HomePage({\n  data\n}) {\n  const features = data.homepage.nodes;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SEO__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      title: \"Rick Janusz: Home\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_HomepageFeatures__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      features: features\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nconst query = gatsby__WEBPACK_IMPORTED_MODULE_2__[\"graphql\"]`\n  query HomepageQuery {\n    homepage: allSanityHomepage {\n      nodes {\n        _id\n        mainHL\n        main {\n          asset {\n            fluid(maxWidth: 1200) {\n              ...GatsbySanityImageFluid\n            }\n          }\n        }\n        subHL1\n        subBanner1 {\n          asset {\n            fluid(maxWidth: 1200) {\n              ...GatsbySanityImageFluid\n            }\n          }\n        }\n        subHL2\n        subBanner2 {\n          asset {\n            fluid(maxWidth: 1200) {\n              ...GatsbySanityImageFluid\n            }\n          }\n        }\n        subHL3\n        subBanner3 {\n          asset {\n            fluid(maxWidth: 1200) {\n              ...GatsbySanityImageFluid\n            }\n          }\n        }\n      }\n    }\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsImRhdGEiLCJmZWF0dXJlcyIsImhvbWVwYWdlIiwibm9kZXMiLCJxdWVyeSIsImdyYXBocWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxRQUFULENBQWtCO0FBQUVDO0FBQUYsQ0FBbEIsRUFBNEI7QUFDekMsUUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUNFLFFBQUwsQ0FBY0MsS0FBL0I7QUFDQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHVEQUFEO0FBQUssV0FBSyxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsb0VBQUQ7QUFBa0IsY0FBUSxFQUFFRjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQU1EO0FBRU0sTUFBTUcsS0FBSyxHQUFHQyw4Q0FBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXhDTyIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdnYXRzYnknXG5pbXBvcnQgU0VPIGZyb20gJy4uL2NvbXBvbmVudHMvU0VPJ1xuXG5pbXBvcnQgSG9tZXBhZ2VGZWF0dXJlcyBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVwYWdlRmVhdHVyZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHsgZGF0YSB9KSB7XG4gIGNvbnN0IGZlYXR1cmVzID0gZGF0YS5ob21lcGFnZS5ub2Rlc1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U0VPIHRpdGxlPVwiUmljayBKYW51c3o6IEhvbWVcIiAvPlxuICAgICAgPEhvbWVwYWdlRmVhdHVyZXMgZmVhdHVyZXM9e2ZlYXR1cmVzfT48L0hvbWVwYWdlRmVhdHVyZXM+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IHF1ZXJ5ID0gZ3JhcGhxbGBcbiAgcXVlcnkgSG9tZXBhZ2VRdWVyeSB7XG4gICAgaG9tZXBhZ2U6IGFsbFNhbml0eUhvbWVwYWdlIHtcbiAgICAgIG5vZGVzIHtcbiAgICAgICAgX2lkXG4gICAgICAgIG1haW5ITFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBhc3NldCB7XG4gICAgICAgICAgICBmbHVpZChtYXhXaWR0aDogMTIwMCkge1xuICAgICAgICAgICAgICAuLi5HYXRzYnlTYW5pdHlJbWFnZUZsdWlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1YkhMMVxuICAgICAgICBzdWJCYW5uZXIxIHtcbiAgICAgICAgICBhc3NldCB7XG4gICAgICAgICAgICBmbHVpZChtYXhXaWR0aDogMTIwMCkge1xuICAgICAgICAgICAgICAuLi5HYXRzYnlTYW5pdHlJbWFnZUZsdWlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1YkhMMlxuICAgICAgICBzdWJCYW5uZXIyIHtcbiAgICAgICAgICBhc3NldCB7XG4gICAgICAgICAgICBmbHVpZChtYXhXaWR0aDogMTIwMCkge1xuICAgICAgICAgICAgICAuLi5HYXRzYnlTYW5pdHlJbWFnZUZsdWlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1YkhMM1xuICAgICAgICBzdWJCYW5uZXIzIHtcbiAgICAgICAgICBhc3NldCB7XG4gICAgICAgICAgICBmbHVpZChtYXhXaWR0aDogMTIwMCkge1xuICAgICAgICAgICAgICAuLi5HYXRzYnlTYW5pdHlJbWFnZUZsdWlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "gatsby":
/*!*************************!*\
  !*** external "gatsby" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gatsby\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnYXRzYnlcIj81ZjMxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImdhdHNieS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdhdHNieVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///gatsby\n");

/***/ }),

/***/ "gatsby-image":
/*!*******************************!*\
  !*** external "gatsby-image" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gatsby-image\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnYXRzYnktaW1hZ2VcIj8zYjJhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImdhdHNieS1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdhdHNieS1pbWFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///gatsby-image\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIj9jOWQwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWhlbG1ldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhlbG1ldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-helmet\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });