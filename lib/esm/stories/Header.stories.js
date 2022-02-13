import React from 'react';
import { Header } from './Header';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'Example/Header',
  component: Header
};

const Template = args => /*#__PURE__*/_jsx(Header, { ...args
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {}
};
export const LoggedOut = Template.bind({});
LoggedOut.args = {};