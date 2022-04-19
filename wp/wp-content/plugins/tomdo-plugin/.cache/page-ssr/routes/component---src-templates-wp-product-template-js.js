exports.id = "component---src-templates-wp-product-template-js";
exports.ids = ["component---src-templates-wp-product-template-js"];
exports.modules = {

/***/ "./src/templates/wp-product-template.js":
/*!**********************************************!*\
  !*** ./src/templates/wp-product-template.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_library_build_style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-library/build-style/style.css */ "./node_modules/@wordpress/block-library/build-style/style.css");
/* harmony import */ var _wordpress_block_library_build_style_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_library_build_style_style_css__WEBPACK_IMPORTED_MODULE_1__);

 // 2. 👇

const WpProductTemplate = ({
  data: {
    wpProduct
  }
}) => {
  const {
    content
  } = wpProduct; // 3. 👇

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    dangerouslySetInnerHTML: {
      __html: content
    }
  }));
}; // 1. 👇


const query = "3879976409";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WpProductTemplate);

/***/ }),

/***/ "./node_modules/@wordpress/block-library/build-style/style.css":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/block-library/build-style/style.css ***!
  \*********************************************************************/
/***/ (() => {



/***/ })

};
;
//# sourceMappingURL=component---src-templates-wp-product-template-js.js.map