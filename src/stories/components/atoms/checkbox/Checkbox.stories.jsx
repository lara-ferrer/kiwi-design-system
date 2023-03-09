import React from 'react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;
export const Single = Template.bind({});
Single.args = {
  label: "Some option here",
  id: "option",
  name: "option"
};