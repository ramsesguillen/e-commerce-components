import React from 'react';
import { Page } from './Page';
import * as HeaderStories from './Header.stories';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'Example/Page',
  component: Page
};

const Template = args => /*#__PURE__*/_jsx(Page, { ...args
});

export const LoggedIn = Template.bind({});
LoggedIn.args = { // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args
};
export const LoggedOut = Template.bind({});
LoggedOut.args = { ...HeaderStories.LoggedOut.args
};