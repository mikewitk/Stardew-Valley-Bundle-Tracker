import styled from '@emotion/styled';

type LabelProps = {
  disabled: boolean;
  checked: boolean;
};

export const StyledCheckbox = styled.input`
  scale: 1.5;
  margin-right: 8px;
`;

export const StyledLabel = styled.label<LabelProps>`
  color: ${({ disabled }) => (disabled ? 'gray' : 'black')};
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
`;
