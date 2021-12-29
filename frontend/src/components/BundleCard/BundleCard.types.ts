import { CheckboxProps } from '../Checkbox/Checkbox.types';

export interface BundleCardProps {
  amountCompleted: number;
  amountNeeded: number;
  bundleItems: Array<CheckboxProps>;
  isComplete: boolean;
  title: string;
}
