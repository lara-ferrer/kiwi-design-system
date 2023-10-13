import React from 'react';
import { CityCard } from './CityCard';
import image from "../../../assets/city-image.jpg";

export default {
  title: 'Components/Organisms/CityCard',
  component: CityCard,
};

const Template = (args) => <CityCard {...args} />;

export const Square = Template.bind({});
Square.args = {
  image
};