export interface BundleItem {
  label: string;
  checked: boolean;
  disabled: boolean;
  itemId: number;
}

export interface BundleSubCategory {
  amountNeeded: number;
  bundleId: number;
  bundleItems: Array<BundleItem>;
  title: string;
  reward: string;
}

export interface BundleCategory {
  category: string;
  reward: string;
  items: Array<BundleSubCategory>;
  categoryId: number;
}

export interface DataProps {
  data: Array<BundleCategory>;
}

export type HandleCheckboxChangeProps = {
  (categoryId: number, bundleId: number, itemId: number): void;
};
