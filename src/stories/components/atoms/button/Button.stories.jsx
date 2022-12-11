import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  state: 'primary',
  size: 'large',
  label: 'Click here',
};

export const Secondary = Template.bind({});
Secondary.args = {
  state: 'secondary',
  size: 'large',
  label: 'Click here',
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'primary',
  size: 'large',
  label: 'Click here',
  isDisabled: true,
};

export const Danger = Template.bind({});
Danger.args = {
  state: 'primary',
  size: 'large',
  label: 'Click here',
  isDanger: true,
};