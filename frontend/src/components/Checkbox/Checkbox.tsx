import React from 'react';
import { StyledLabel, StyledCheckbox } from './Checkbox.styles';
import { BundleItem } from '../../pages/BundleTracker';

const Checkbox: React.FC<BundleItem & { onChange: () => void }> = ({
  label,
  checked,
  onChange,
  disabled,
  item_id: itemId,
}) => (
  <>
    <StyledCheckbox
      type="checkbox"
      name={`checkbox-${label}-${itemId}`}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
    <StyledLabel
      checked={checked}
      disabled={disabled}
      htmlFor={`checkbox-${label}`}
    >
      {label}
    </StyledLabel>
  </>
);
export default Checkbox;
