import { CheckboxProps } from '../Checkbox/Checkbox.types';

export interface BundleCardProps {
  amountNeeded: number;
  bundleItems: Array<CheckboxProps>;
  title: string;
}
