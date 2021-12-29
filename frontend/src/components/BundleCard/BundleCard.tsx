import React from 'react';
import { BundleCardProps } from './BundleCard.types';
import { StyledTitle, StyledLi } from './BundleCard.styles';
import Checkbox from '../Checkbox/Checkbox';
import { HandleCheckboxChangeProps } from '../../pages/BundleTracker';

const BundleCard: React.FC<
  BundleCardProps & {
    onChange: HandleCheckboxChangeProps;
    categoryId: number;
    bundleId: number;
  }
> = ({
  title,
  isComplete,
  amountNeeded,
  amountCompleted,
  bundleItems,
  onChange,
  categoryId,
  bundleId,
}) => (
  <div>
    <StyledTitle isComplete={isComplete}>
      {title}
      &nbsp;
      {amountCompleted}
      /
      {amountNeeded}
    </StyledTitle>
    <ul>
      {bundleItems.map((item) => (
        <StyledLi key={item.item_id}>
          <Checkbox
            label={item.label}
            checked={item.checked}
            disabled={item.disabled}
            onChange={() => onChange(categoryId, bundleId, item.item_id)}
            item_id={item.item_id}
          />
        </StyledLi>
      ))}
    </ul>
  </div>
);

export default BundleCard;
