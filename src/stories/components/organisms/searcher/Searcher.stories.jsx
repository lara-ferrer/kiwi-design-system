import React from 'react';

import { Searcher } from './searcher';

export default {
  title: 'Components/Organisms/Searcher',
  component: Searcher,
};

const Template = (args) => <Searcher {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search something here...",
  isDisabled: false,
  isDanger: false,
  isClearable: true
};

export const WithResults = Template.bind({});
WithResults.args = {
  placeholder: "Search something here...",
  isDisabled: false,
  isDanger: false,
  isClearable: true,
  results: [
    {
      name: "Los Helechos",
      address: "Zaragoza, España",
      categories: ["Vegetariano", "Vegano"]
    },
    {
      name: "Los Hechizos",
      address: "Madrid, España",
      categories: ["Flexitariano"]
    }
  ]
};