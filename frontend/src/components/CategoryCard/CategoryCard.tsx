import React from 'react';
import {
  BundleCategory,
  HandleCheckboxChangeProps,
} from '../../pages/BundleTracker';
import BundleCard from '../BundleCard/BundleCard';

const CategoryCard: React.FC<
  BundleCategory & { onChange: HandleCheckboxChangeProps; category_id: number }
> = ({
  category, items, reward, onChange, category_id: categoryId,
}) => (
  <div>
    <h2>{category}</h2>
    <p>
      Reward: &nbsp;
      {reward}
    </p>
    {items.map((item) => (
      <BundleCard
        title={item.title}
        amountNeeded={item.amount_needed}
        bundleItems={item.bundle_items}
        key={item.title + item.amount_available}
        onChange={onChange}
        categoryId={categoryId}
        bundleId={item.bundle_id}
      />
    ))}
  </div>
);

export default CategoryCard;
