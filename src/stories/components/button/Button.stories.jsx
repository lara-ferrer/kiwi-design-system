import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  state: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  state: 'secondary',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  state: 'primary',
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  state: 'primary',
  size: 'small',
  label: 'Button',
};
