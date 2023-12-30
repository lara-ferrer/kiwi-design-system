import React from 'react';
import { TextCard } from './text-card';

export default {
  title: 'Components/Organisms/TextCard',
  component: TextCard,
};

const Template = (args) => <TextCard {...args} />;

const children = <>
  <h4>Opening Hours</h4>
  <h5>Monday</h5> <p>17:00-20:00</p>
</>

export const Default = Template.bind({});
Default.args = {
  children
};