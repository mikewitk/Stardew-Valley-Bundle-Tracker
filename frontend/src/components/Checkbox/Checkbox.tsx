import React from 'react';
import { StyledLabel, StyledCheckbox } from './Checkbox.styles';
import { BundleItem } from '../../types';

const Checkbox: React.FC<BundleItem & { onChange: () => void }> = ({
  label,
  checked,
  onChange,
  disabled,
  itemId,
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
