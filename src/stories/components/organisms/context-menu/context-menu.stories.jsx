import React from 'react';
import { ContextMenu } from './context-menu';

export default {
  title: 'Components/Organisms/ContextMenu',
  component: ContextMenu,
};

const Template = (args) => <ContextMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "large"
};
