import React from 'react';

import { Tag } from './Tag';

export default {
  title: 'Components/Atoms/Tag',
  component: Tag,
};

const Template = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Vegan'
};