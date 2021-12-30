import React from 'react';
import { StyledTitle, StyledLi, StyledCard } from './BundleCard.styles';
import Checkbox from '../Checkbox/Checkbox';
import {
  HandleCheckboxChangeProps,
  BundleSubCategory,
} from '../../types';

const BundleCard: React.FC<
  BundleSubCategory & {
    onChange: HandleCheckboxChangeProps;
    categoryId: number;
    bundleId: number;
  }
> = ({
  title,
  amountNeeded,
  bundleItems,
  onChange,
  categoryId,
  bundleId,
  reward,
}) => {
  const checkedItems = bundleItems.filter(
    (bundleItem) => bundleItem.checked,
  ).length;

  return (
    <StyledCard>
      <StyledTitle isComplete={checkedItems >= amountNeeded}>
        {title}
        &nbsp;
        {checkedItems}
        /
        {amountNeeded}
      </StyledTitle>
      <p>{reward}</p>
      <ul>
        {bundleItems.map((item) => (
          <StyledLi key={item.itemId}>
            <Checkbox
              label={item.label}
              checked={item.checked}
              disabled={item.disabled}
              onChange={() => onChange(categoryId, bundleId, item.itemId)}
              itemId={item.itemId}
            />
          </StyledLi>
        ))}
      </ul>
    </StyledCard>
  );
};

export default BundleCard;
