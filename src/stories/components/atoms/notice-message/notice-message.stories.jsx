import React from 'react';

import { NoticeMessage } from './notice-message';

export default {
  title: 'Components/Atoms/NoticeMessage',
  component: NoticeMessage,
};

const Template = (args) => <NoticeMessage {...args} />;

export const Single = Template.bind({});
Single.args = {
  message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
};