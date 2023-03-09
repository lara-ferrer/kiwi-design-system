import React from 'react';

import { Select } from './Select';

export default {
  title: 'Components/Atoms/Select',
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Write something here...",
  isDisabled: false,
  isDanger: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Write something here...",
  isDisabled: true,
  isDanger: false
};

export const Danger = Template.bind({});
Danger.args = {
  placeholder: "Write something here...",
  isDisabled: false,
  isDanger: true
};