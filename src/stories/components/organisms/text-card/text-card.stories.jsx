import React from 'react';
import { TextCard } from './text-card';
import avatar from '../../../../images/avatar.png';

export default {
  title: 'Components/Organisms/TextCard',
  component: TextCard,
};

const Template = (args) => <TextCard {...args} />;

const defaultChildren = <>
  <h4>Opening Hours</h4>
  <h5>Monday</h5> <p>17:00-20:00</p>
</>

const imageChildren = <div style={{ flexDirection: 'column' }}>
  <h4>Best coffee in town!</h4>
  <p>This coffee shop serves one of the best coffees I've ever tried! Will be back for sure.</p>
</div>


export const Default = Template.bind({});
Default.args = {
  children: defaultChildren
};

export const WithImage = Template.bind({});
WithImage.args = {
  children: imageChildren,
  image: avatar
};