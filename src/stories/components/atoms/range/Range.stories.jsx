import React from 'react';

import { Range } from './Range';

export default {
  title: 'Components/Atoms/Range',
  component: Range,
};

const Template = (args) => <Range {...args} />;

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100
};