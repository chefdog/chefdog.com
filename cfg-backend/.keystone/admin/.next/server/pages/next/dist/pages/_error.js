"use strict";
(() => {
var exports = {};
exports.id = "pages/next/dist/pages/_error";
exports.ids = ["pages/next/dist/pages/_error"];
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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("../../node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSw0QkFGYjtBQUdBQyxJQUFBQSxNQUFNLEVBQUUsQ0FIUjtBQUlBQyxJQUFBQSxXQUFXLEVBQUUsTUFKYjtBQUtBQyxJQUFBQSxPQUFPLEVBQUUsa0JBTFQ7QUFNQUMsSUFBQUEsUUFBUSxFQUFFLE1BTlY7QUFPQUMsSUFBQUEsVUFBVSxFQUFFLEdBUFo7QUFRQU4sSUFBQUEsYUFBYSxFQUFFO0FBUmYsR0FuQk87QUE2QlhmLEVBQUFBLEVBQUUsRUFBRTtBQUNBb0IsSUFBQUEsUUFBUSxFQUFFLE1BRFY7QUFFQUMsSUFBQUEsVUFBVSxFQUFFLFFBRlo7QUFHQVAsSUFBQUEsVUFBVSxFQUFFLFNBSFo7QUFJQUcsSUFBQUEsTUFBTSxFQUFFLENBSlI7QUFLQUUsSUFBQUEsT0FBTyxFQUFFO0FBTFQ7QUE3Qk8sQ0FBZjs7Ozs7Ozs7OztBQy9DQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2Vycm9yLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XHJcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBfaGVhZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG9ialxyXG4gICAgfTtcclxufVxyXG5jb25zdCBzdGF0dXNDb2RlcyA9IHtcclxuICAgIDQwMDogJ0JhZCBSZXF1ZXN0JyxcclxuICAgIDQwNDogJ1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnLFxyXG4gICAgNDA1OiAnTWV0aG9kIE5vdCBBbGxvd2VkJyxcclxuICAgIDUwMDogJ0ludGVybmFsIFNlcnZlciBFcnJvcidcclxufTtcclxuZnVuY3Rpb24gX2dldEluaXRpYWxQcm9wcyh7IHJlcyAsIGVyciAgfSkge1xyXG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcyAmJiByZXMuc3RhdHVzQ29kZSA/IHJlcy5zdGF0dXNDb2RlIDogZXJyID8gZXJyLnN0YXR1c0NvZGUgOiA0MDQ7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXR1c0NvZGVcclxuICAgIH07XHJcbn1cclxuY2xhc3MgRXJyb3IxIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHN0YXR1c0NvZGUgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZSB8fCBzdGF0dXNDb2Rlc1tzdGF0dXNDb2RlXSB8fCAnQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWQnO1xyXG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xyXG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmVycm9yXHJcbiAgICAgICAgfSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIG51bGwsIHN0YXR1c0NvZGUgPyBgJHtzdGF0dXNDb2RlfTogJHt0aXRsZX1gIDogJ0FwcGxpY2F0aW9uIGVycm9yOiBhIGNsaWVudC1zaWRlIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQnKSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XHJcbiAgICAgICAgICAgICAgICBfX2h0bWw6ICdib2R5IHsgbWFyZ2luOiAwIH0nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSwgc3RhdHVzQ29kZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgxXCIsIHtcclxuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5oMVxyXG4gICAgICAgIH0sIHN0YXR1c0NvZGUpIDogbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcclxuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5kZXNjXHJcbiAgICAgICAgfSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwge1xyXG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmgyXHJcbiAgICAgICAgfSwgdGhpcy5wcm9wcy50aXRsZSB8fCBzdGF0dXNDb2RlID8gdGl0bGUgOiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIFwiQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCAoc2VlIHRoZSBicm93c2VyIGNvbnNvbGUgZm9yIG1vcmUgaW5mb3JtYXRpb24pXCIpLCBcIi5cIikpKSkpO1xyXG4gICAgfVxyXG59XHJcbkVycm9yMS5kaXNwbGF5TmFtZSA9ICdFcnJvclBhZ2UnO1xyXG5FcnJvcjEuZ2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wcztcclxuRXJyb3IxLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBFcnJvcjE7XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGVycm9yOiB7XHJcbiAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXHJcbiAgICAgICAgZm9udEZhbWlseTogJy1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBcIlNlZ29lIFVJXCIsIFwiRmlyYSBTYW5zXCIsIEF2ZW5pciwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZicsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIGRlc2M6IHtcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDlweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnNDlweCcsXHJcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcclxuICAgIH0sXHJcbiAgICBoMToge1xyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwuMyknLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4IDIzcHggMTBweCAwJyxcclxuICAgICAgICBmb250U2l6ZTogJzI0cHgnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJ1xyXG4gICAgfSxcclxuICAgIGgyOiB7XHJcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIHBhZGRpbmc6IDBcclxuICAgIH1cclxufTtcclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9lcnJvci5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwib2JqIiwiX19lc01vZHVsZSIsInN0YXR1c0NvZGVzIiwiX2dldEluaXRpYWxQcm9wcyIsInJlcyIsImVyciIsInN0YXR1c0NvZGUiLCJFcnJvcjEiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsInRpdGxlIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwic3R5bGVzIiwiZXJyb3IiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImgxIiwiZGVzYyIsImgyIiwiRnJhZ21lbnQiLCJkaXNwbGF5TmFtZSIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJjb2xvciIsImJhY2tncm91bmQiLCJmb250RmFtaWx5IiwiaGVpZ2h0IiwidGV4dEFsaWduIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwidmVydGljYWxBbGlnbiIsImJvcmRlclJpZ2h0IiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==