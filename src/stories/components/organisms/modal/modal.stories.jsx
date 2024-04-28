import React from 'react';
import { Modal } from './modal';
import { Button } from '../../atoms/button';

export default {
  title: 'Components/Organisms/Modal',
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: "large"
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium"
};

export const WithButtons = Template.bind({});
WithButtons.args = {
  size: "large",
  footer: <Button>Click here</Button>
};