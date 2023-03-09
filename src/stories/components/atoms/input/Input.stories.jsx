import React from 'react';

import { Input } from './Input';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Write something here...",
  type: "text",
  isDisabled: false,
  isDanger: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Write something here...",
  type: "text",
  isDisabled: true,
  isDanger: false
};

export const Danger = Template.bind({});
Danger.args = {
  placeholder: "Write something here...",
  type: "text",
  isDisabled: false,
  isDanger: true
};