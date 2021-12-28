import React from 'react';
import { CheckboxProps } from './Checkbox.types';
import { StyledLabel, StyledCheckbox } from './Checkbox.styles';

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled,
}) => (
  <>
    <StyledCheckbox
      type="checkbox"
      name={`checkbox-${label}`}
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
