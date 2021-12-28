import React from 'react';
import { BundleCardProps } from './BundleCard.types';
import { StyledTitle, StyledLi } from './BundleCard.styles';
import Checkbox from '../Checkbox/Checkbox';

const BundleCard: React.FC<BundleCardProps> = ({
  title,
  isComplete,
  amountNeeded,
  amountCompleted,
  bundleItems,
}) => (
  <div>
    <StyledTitle isComplete={isComplete}>
      {title} {amountCompleted}/{amountNeeded}
    </StyledTitle>
    <ul>
      {bundleItems.map((item) => (
        <StyledLi>
          <Checkbox
            label={item.label}
            checked={item.checked}
            disabled={item.disabled}
            onChange={() => console.log(`label: ${item.label}`)}
          />
        </StyledLi>
      ))}
    </ul>
  </div>
);

export default BundleCard;
