exports.id = "component---src-templates-wp-page-template-js";
exports.ids = ["component---src-templates-wp-page-template-js"];
exports.modules = {

/***/ "./src/templates/wp-page-template.js":
/*!*******************************************!*\
  !*** ./src/templates/wp-page-template.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _build_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../build/index.css */ "./build/index.css");
/* harmony import */ var _build_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_build_index_css__WEBPACK_IMPORTED_MODULE_1__);

 // 2. 👇

const WpPageTemplate = ({
  data: {
    wpPage
  }
}) => {
  const {
    title,
    content
  } = wpPage; // 3. 👇

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    dangerouslySetInnerHTML: {
      __html: content
    }
  }));
}; // 1. 👇


const query = "870481504";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpPageTemplate);

/***/ }),

/***/ "./build/index.css":
/*!*************************!*\
  !*** ./build/index.css ***!
  \*************************/
/***/ (() => {



/***/ })

};
;
//# sourceMappingURL=component---src-templates-wp-page-template-js.js.map