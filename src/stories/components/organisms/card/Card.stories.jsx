import React from 'react';
import image from "../../../assets/card-image.jpg";

import { Card } from './Card';

export default {
  title: 'Components/Organisms/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Single = Template.bind({});
Single.args = {
  image,
  title: "Green restaurant"
};