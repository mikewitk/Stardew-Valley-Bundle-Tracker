import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import BundleCard from './BundleCard';

const BUNDLE_ITEMS_INCOMPLETE = [
  {
    label: 'sunfish',
    checked: false,
    disabled: false,
  },
  {
    label: 'catfish',
    checked: false,
    disabled: false,
  },
  {
    label: 'shad',
    checked: false,
    disabled: false,
  },
  {
    label: 'tiger trout',
    checked: false,
    disabled: false,
  },
];

const BUNDLE_ITEMS_COMPLETE = [
  {
    label: 'sunfish',
    checked: true,
    disabled: false,
  },
  {
    label: 'catfish',
    checked: true,
    disabled: false,
  },
  {
    label: 'shad',
    checked: true,
    disabled: false,
  },
  {
    label: 'tiger trout',
    checked: true,
    disabled: false,
  },
];

export default {
  title: 'Bundle Card',
  component: BundleCard,
} as ComponentMeta<typeof BundleCard>;

const Template: ComponentStory<typeof BundleCard> = (args) => (
  <BundleCard {...args} />
);

export const BundleIncomplete = Template.bind({});
BundleIncomplete.args = {
  title: 'spring foraging bundle',
  amountCompleted: 2,
  amountNeeded: 4,
  isComplete: false,
  bundleItems: BUNDLE_ITEMS_INCOMPLETE,
};

export const BundleComplete = Template.bind({});
BundleComplete.args = {
  title: 'summer foraging bundle',
  amountCompleted: 4,
  amountNeeded: 4,
  isComplete: true,
  bundleItems: BUNDLE_ITEMS_COMPLETE,
};
