import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import BundleCard from './BundleCard';

const BUNDLE_ITEMS_INCOMPLETE = [
  {
    label: 'wild horseradish',
    checked: false,
    disabled: false,
    item_id: 110,
  },
  {
    label: 'daffodil',
    checked: false,
    disabled: false,
    item_id: 111,
  },
  {
    label: 'leek',
    checked: false,
    disabled: false,
    item_id: 112,
  },
  {
    label: 'dandelion',
    checked: false,
    disabled: false,
    item_id: 113,
  },
];

const BUNDLE_ITEMS_COMPLETE = [
  {
    label: 'wild horseradish',
    checked: true,
    disabled: false,
    item_id: 110,
  },
  {
    label: 'daffodil',
    checked: true,
    disabled: false,
    item_id: 111,
  },
  {
    label: 'leek',
    checked: true,
    disabled: false,
    item_id: 112,
  },
  {
    label: 'dandelion',
    checked: true,
    disabled: false,
    item_id: 113,
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
  amountNeeded: 4,
  bundleItems: BUNDLE_ITEMS_INCOMPLETE,
};

export const BundleComplete = Template.bind({});
BundleComplete.args = {
  title: 'summer foraging bundle',
  amountNeeded: 4,
  bundleItems: BUNDLE_ITEMS_COMPLETE,
};
