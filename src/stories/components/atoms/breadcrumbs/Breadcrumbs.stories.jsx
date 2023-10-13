import React from 'react';

import { Breadcrumbs } from './Breadcrumbs';

export default {
  title: 'Components/Atoms/Breadcrumbs',
  component: Breadcrumbs,
};

const Template = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
};