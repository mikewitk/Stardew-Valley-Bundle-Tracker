import { CheckboxProps } from '../Checkbox/Checkbox.types';

export interface BundleCardProps {
  title: string;
  isComplete: boolean;
  amountNeeded: number;
  amountCompleted: number;
  bundleItems: Array<CheckboxProps>;
}
