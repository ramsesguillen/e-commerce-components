import React from 'react';
import Button from '../components/Button'; // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
}; // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = args => /*#__PURE__*/_jsx(Button, { ...args
});

export const Primary = Template.bind({}); // More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  primary: true,
  children: 'Button',
  variant: 'primary'
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  variant: 'secondary'
};
export const Large = Template.bind({});
Large.args = {
  children: 'Button',
  size: 'lg'
};
export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  children: 'Button'
};