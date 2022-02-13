"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.LoggedOut = exports.LoggedIn = void 0;

var _react = _interopRequireDefault(require("react"));

var _Header = require("./Header");

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Example/Header',
  component: _Header.Header
};
exports.default = _default;

const Template = args => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.Header, { ...args
});

const LoggedIn = Template.bind({});
exports.LoggedIn = LoggedIn;
LoggedIn.args = {
  user: {}
};
const LoggedOut = Template.bind({});
exports.LoggedOut = LoggedOut;
LoggedOut.args = {};