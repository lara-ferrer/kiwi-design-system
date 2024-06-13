import React from 'react';

import { Tag } from './Tag';

export default {
  title: 'Components/Atoms/Tag',
  component: Tag,
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Vegan",
  size: "small"
};

export const WithLink = Template.bind({});
WithLink.args = {
  title: "Vegan",
  size: "small",
  link: "https://www.google.es"
};