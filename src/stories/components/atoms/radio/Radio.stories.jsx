import React from 'react';

import { Radio } from './Radio';

export default {
  title: 'Components/Atoms/Radio',
  component: Radio,
};

const Template = (args) => <Radio {...args} />;

export const Single = Template.bind({});
Single.args = {
  label: "Some option here",
  id: "option",
  name: "option"
};