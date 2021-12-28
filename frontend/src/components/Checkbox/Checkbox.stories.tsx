import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Checked = Template.bind({});
Checked.args = {
  label: 'Wild Horseradish',
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Wild Horseradish',
};
