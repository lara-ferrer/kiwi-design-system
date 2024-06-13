import React from 'react';
import image from "../../../assets/card-image.jpg";
import { BusinessCard } from './business-card';

export default {
  title: 'Components/Organisms/BusinessCard',
  component: BusinessCard,
};

const Template = (args) => <BusinessCard {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  image,
  title: "Green restaurant"
};