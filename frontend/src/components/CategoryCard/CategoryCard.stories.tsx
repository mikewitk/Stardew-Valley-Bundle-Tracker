import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import CategoryCard from './CategoryCard';

export default {
  title: 'Category Card',
  component: CategoryCard,
} as ComponentMeta<typeof CategoryCard>;

const Template: ComponentStory<typeof CategoryCard> = (args) => (
  <CategoryCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  categoryId: 1,
  category: "craft's room",
  reward: 'bridge repair',
  items: [
    {
      title: 'spring foraging bundle',
      amountNeeded: 4,
      bundleItems: [
        {
          label: 'wild horseradish',
          checked: false,
          disabled: false,
          itemId: 110,
        },
        {
          label: 'daffodil',
          checked: false,
          disabled: false,
          itemId: 111,
        },
        {
          label: 'leek',
          checked: false,
          disabled: false,
          itemId: 112,
        },
        {
          label: 'dandelion',
          checked: false,
          disabled: false,
          itemId: 113,
        },
      ],
      reward: 'spring seeds (30)',
      bundleId: 1,
    },
    {
      title: 'Summer Foraging Bundle',
      amountNeeded: 3,
      bundleItems: [
        {
          label: 'Grape',
          checked: false,
          disabled: false,
          itemId: 114,
        },
        {
          label: 'Spice Berry',
          checked: false,
          disabled: false,
          itemId: 115,
        },
        {
          label: 'Sweet Pea',
          checked: false,
          disabled: false,
          itemId: 116,
        },
      ],
      reward: 'Summer Seeds (30)',
      bundleId: 2,
    },
    {
      title: 'Fall Foraging Bundle',
      amountNeeded: 4,
      bundleItems: [
        {
          label: 'Common Mushroom',
          checked: false,
          disabled: false,
          itemId: 117,
        },
        {
          label: 'Wild Plum',
          checked: false,
          disabled: false,
          itemId: 118,
        },
        {
          label: 'Hazelnut',
          checked: false,
          disabled: false,
          itemId: 119,
        },
        {
          label: 'Blackberry',
          checked: false,
          disabled: false,
          itemId: 120,
        },
      ],
      reward: 'Fall Seeds (30)',
      bundleId: 3,
    },
    {
      title: 'Winter Foraging Bundle',
      amountNeeded: 4,
      bundleItems: [
        {
          label: 'Winter Root',
          checked: false,
          disabled: false,
          itemId: 121,
        },
        {
          label: 'crystal fruit',
          checked: false,
          disabled: false,
          itemId: 122,
        },
        {
          label: 'Snow Yam',
          checked: false,
          disabled: false,
          itemId: 123,
        },
        {
          label: 'Crocus',
          checked: false,
          disabled: false,
          itemId: 124,
        },
      ],
      reward: 'Winter Seeds (30)',
      bundleId: 4,
    },
    {
      title: 'Construction Bundle',
      amountNeeded: 4,
      bundleItems: [
        {
          label: 'wood (99)',
          checked: false,
          disabled: false,
          itemId: 125,
        },
        {
          label: 'wood (99)',
          checked: false,
          disabled: false,
          itemId: 126,
        },
        {
          label: 'stone (99)',
          checked: false,
          disabled: false,
          itemId: 127,
        },
        {
          label: 'hardwood (10)',
          checked: false,
          disabled: false,
          itemId: 128,
        },
      ],
      reward: 'charcoal kiln',
      bundleId: 5,
    },
    {
      title: 'Exotic Foraging Bundle',
      amountNeeded: 5,
      bundleItems: [
        {
          label: 'coconut',
          checked: false,
          disabled: false,
          itemId: 129,
        },
        {
          label: 'cactus fruit',
          checked: false,
          disabled: false,
          itemId: 130,
        },
        {
          label: 'cave carrot',
          checked: false,
          disabled: false,
          itemId: 131,
        },
        {
          label: 'red mushroom',
          checked: false,
          disabled: false,
          itemId: 132,
        },
        {
          label: 'purple mushroom',
          checked: false,
          disabled: false,
          itemId: 133,
        },
        {
          label: 'maple syrup',
          checked: false,
          disabled: false,
          itemId: 134,
        },
        {
          label: 'oak resin',
          checked: false,
          disabled: false,
          itemId: 135,
        },
        {
          label: 'pine tar',
          checked: false,
          disabled: false,
          itemId: 136,
        },
        {
          label: 'morel',
          checked: false,
          disabled: false,
          itemId: 137,
        },
      ],
      reward: "autumn's bounty",
      bundleId: 6,
    },
  ],
};
