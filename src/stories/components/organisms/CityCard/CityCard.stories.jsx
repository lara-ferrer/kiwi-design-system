import React from 'react';

import { CityCard } from './CityCard';

export default {
  title: 'Components/Organisms/CityCard',
  component: CityCard,
};

const Template = (args) => <CityCard {...args} />;

export const Square = Template.bind({});