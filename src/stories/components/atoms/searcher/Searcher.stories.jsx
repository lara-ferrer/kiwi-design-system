import React from 'react';

import { Searcher } from './Searcher';

export default {
  title: 'Components/Atoms/Searcher',
  component: Searcher,
};

const Template = (args) => <Searcher {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search something here...",
  isDisabled: false,
  isDanger: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Search something here...",
  isDisabled: true,
  isDanger: false
};

export const Danger = Template.bind({});
Danger.args = {
  placeholder: "Search something here...",
  isDisabled: false,
  isDanger: true
};