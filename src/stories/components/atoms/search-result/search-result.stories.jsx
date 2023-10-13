import React from 'react';

import { SearchResult } from './search-result';

export default {
  title: 'Components/Atoms/SearchResult',
  component: SearchResult,
};

const Template = (args) => <SearchResult {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "Los Helechos",
    address: "Zaragoza, España",
    categories: ["Vegetariano", "Vegano"]
};