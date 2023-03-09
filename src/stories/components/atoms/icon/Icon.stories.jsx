import React from 'react';

import { Icon } from './Icon';

export default {
  title: 'Components/Atoms/Icon',
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Single = Template.bind({});
Single.args = {
  name: "leaf2"
};