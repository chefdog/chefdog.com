"use strict";
(() => {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "../../node_modules/next/dist/pages/_error.js":
/*!****************************************************!*\
  !*** ../../node_modules/next/dist/pages/_error.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps({
  res,
  err
}) {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}

class Error1 extends _react.default.Component {
  render() {
    const {
      statusCode
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode ? `${statusCode}: ${title}` : 'Application error: a client-side exception has occurred')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, this.props.title || statusCode ? title : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Application error: a client-side exception has occurred (see the browser console for more information)"), "."))));
  }

}

Error1.displayName = 'ErrorPage';
Error1.getInitialProps = _getInitialProps;
Error1.origGetInitialProps = _getInitialProps;
exports.default = Error1;
const styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("../../node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLE1BQU0sRUFBRSxDQUhSO0FBSUFDLElBQUFBLFdBQVcsRUFBRSxNQUpiO0FBS0FDLElBQUFBLE9BQU8sRUFBRSxrQkFMVDtBQU1BQyxJQUFBQSxRQUFRLEVBQUUsTUFOVjtBQU9BQyxJQUFBQSxVQUFVLEVBQUUsR0FQWjtBQVFBTixJQUFBQSxhQUFhLEVBQUU7QUFSZixHQW5CTztBQTZCWGYsRUFBQUEsRUFBRSxFQUFFO0FBQ0FvQixJQUFBQSxRQUFRLEVBQUUsTUFEVjtBQUVBQyxJQUFBQSxVQUFVLEVBQUUsUUFGWjtBQUdBUCxJQUFBQSxVQUFVLEVBQUUsU0FIWjtBQUlBRyxJQUFBQSxNQUFNLEVBQUUsQ0FKUjtBQUtBRSxJQUFBQSxPQUFPLEVBQUU7QUFMVDtBQTdCTyxDQUFmOzs7Ozs7Ozs7O0FDL0NBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZXJyb3IuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIF9oZWFkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICAgICAgZGVmYXVsdDogb2JqXHJcbiAgICB9O1xyXG59XHJcbmNvbnN0IHN0YXR1c0NvZGVzID0ge1xyXG4gICAgNDAwOiAnQmFkIFJlcXVlc3QnLFxyXG4gICAgNDA0OiAnVGhpcyBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZCcsXHJcbiAgICA0MDU6ICdNZXRob2QgTm90IEFsbG93ZWQnLFxyXG4gICAgNTAwOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJ1xyXG59O1xyXG5mdW5jdGlvbiBfZ2V0SW5pdGlhbFByb3BzKHsgcmVzICwgZXJyICB9KSB7XHJcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzICYmIHJlcy5zdGF0dXNDb2RlID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IDQwNDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3RhdHVzQ29kZVxyXG4gICAgfTtcclxufVxyXG5jbGFzcyBFcnJvcjEgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RhdHVzQ29kZSAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlIHx8IHN0YXR1c0NvZGVzW3N0YXR1c0NvZGVdIHx8ICdBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCc7XHJcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XHJcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuZXJyb3JcclxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwgbnVsbCwgc3RhdHVzQ29kZSA/IGAke3N0YXR1c0NvZGV9OiAke3RpdGxlfWAgOiAnQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCcpKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIHtcclxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcclxuICAgICAgICAgICAgICAgIF9faHRtbDogJ2JvZHkgeyBtYXJnaW46IDAgfSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLCBzdGF0dXNDb2RlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge1xyXG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmgxXHJcbiAgICAgICAgfSwgc3RhdHVzQ29kZSkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xyXG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmRlc2NcclxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7XHJcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuaDJcclxuICAgICAgICB9LCB0aGlzLnByb3BzLnRpdGxlIHx8IHN0YXR1c0NvZGUgPyB0aXRsZSA6IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgXCJBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkIChzZWUgdGhlIGJyb3dzZXIgY29uc29sZSBmb3IgbW9yZSBpbmZvcm1hdGlvbilcIiksIFwiLlwiKSkpKSk7XHJcbiAgICB9XHJcbn1cclxuRXJyb3IxLmRpc3BsYXlOYW1lID0gJ0Vycm9yUGFnZSc7XHJcbkVycm9yMS5nZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzO1xyXG5FcnJvcjEub3JpZ0dldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHM7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEVycm9yMTtcclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgZXJyb3I6IHtcclxuICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICAgICAgICBmb250RmFtaWx5OiAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiU2Vnb2UgVUlcIiwgXCJGaXJhIFNhbnNcIiwgQXZlbmlyLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgZGVzYzoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0OXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc0OXB4JyxcclxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xyXG4gICAgfSxcclxuICAgIGgxOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgcmdiYSgwLCAwLCAwLC4zKScsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgcGFkZGluZzogJzEwcHggMjNweCAxMHB4IDAnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMjRweCcsXHJcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnXHJcbiAgICB9LFxyXG4gICAgaDI6IHtcclxuICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgcGFkZGluZzogMFxyXG4gICAgfVxyXG59O1xyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2Vycm9yLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2hlYWQiLCJvYmoiLCJfX2VzTW9kdWxlIiwic3RhdHVzQ29kZXMiLCJfZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZXJyIiwic3RhdHVzQ29kZSIsIkVycm9yMSIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwidGl0bGUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJzdHlsZXMiLCJlcnJvciIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaDEiLCJkZXNjIiwiaDIiLCJGcmFnbWVudCIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImNvbG9yIiwiYmFja2dyb3VuZCIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImxpbmVIZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiYm9yZGVyUmlnaHQiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9