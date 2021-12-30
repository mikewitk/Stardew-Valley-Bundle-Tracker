import React from 'react';
import {
  BundleCategory,
  HandleCheckboxChangeProps,
} from '../../types';
import BundleCard from '../BundleCard/BundleCard';
import {
  StyledTitle,
  StyledText,
  StyledReward,
  Box,
  Card,
} from './CategoryCard.styles';

const CategoryCard: React.FC<
  BundleCategory & { onChange: HandleCheckboxChangeProps; categoryId: number }
> = ({
  category, items, reward, onChange, categoryId,
}) => (
  <div>
    <StyledTitle>{category}</StyledTitle>
    <Box>
      <StyledText>Reward:</StyledText>
      <StyledReward>{reward}</StyledReward>
    </Box>
    <Card>
      {items.map((item) => (
        <BundleCard
          title={item.title}
          amountNeeded={item.amountNeeded}
          bundleItems={item.bundleItems}
          key={item.bundleId}
          onChange={onChange}
          categoryId={categoryId}
          bundleId={item.bundleId}
          reward={item.reward}
        />
      ))}
    </Card>
  </div>
);

export default CategoryCard;
