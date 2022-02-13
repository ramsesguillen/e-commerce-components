"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.Small = exports.Secondary = exports.Primary = exports.Large = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../components/Button"));

var _jsxRuntime = require("react/jsx-runtime");

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: 'Example/Button',
  component: _Button.default,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
}; // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

exports.default = _default;

const Template = args => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, { ...args
});

const Primary = Template.bind({}); // More on args: https://storybook.js.org/docs/react/writing-stories/args

exports.Primary = Primary;
Primary.args = {
  primary: true,
  children: 'Button',
  variant: 'primary'
};
const Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  children: 'Button',
  variant: 'secondary'
};
const Large = Template.bind({});
exports.Large = Large;
Large.args = {
  children: 'Button',
  size: 'lg'
};
const Small = Template.bind({});
exports.Small = Small;
Small.args = {
  size: 'sm',
  children: 'Button'
};