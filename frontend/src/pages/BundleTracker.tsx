/* eslint-disable */
import React, { useEffect } from 'react';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import { useLocalStorage } from '../hooks/useLocalStorage';

export interface BundleItem {
  label: string;
  checked: boolean;
  disabled: boolean;
  item_id: number;
}

export interface BundleSubCategory {
  amount_available: number;
  amount_needed: number;
  bundle_id: number;
  bundle_items: Array<BundleItem>;
  isComplete: boolean;
  title: string;
}

export interface BundleCategory {
  category: string;
  reward: string;
  items: Array<BundleSubCategory>;
  category_id: number;
}

interface DataProps {
  data: Array<BundleCategory>;
}

export type HandleCheckboxChangeProps = {
  (categoryId: number, bundleId: number, itemId: number): void;
};

const BundleTracker: React.FC = () => {
  const [storage, setStorage] = useLocalStorage<Array<BundleCategory>>(
    'bundles',
    [],
  );

  useEffect(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data: DataProps) => {
        // Work with JSON data here
        if (storage.length > 0) {
          return;
        }
        setStorage(data.data);
      })
      .catch((err) => {
        // Do something for an error here
        console.log('err', err);
      });
  }, []);

  const handleCheckboxChange: HandleCheckboxChangeProps = (
    categoryId,
    bundleId,
    itemId,
  ) => {
    const update = storage.map((item) => {
      if (item.category_id === categoryId) {
        const newItem = item.items.map((subItem) => {
          if (subItem.bundle_id === bundleId) {
            const newSubItem = subItem.bundle_items.map((bundleItem) => {
              if (bundleItem.item_id === itemId) {
                const newItem = { ...bundleItem, checked: !bundleItem.checked };
                return newItem;
              }
              return bundleItem;
            });
            return { ...subItem, bundle_items: newSubItem };
          }
          return subItem;
        });
        return { ...item, items: newItem };
      }
      return item;
    });
    setStorage(update);
  };

  return (
    <div>
      <h1>Stardew Valley Bundle Tracker</h1>
      <p>This tracker allows you to keep track of your bundles</p>
      <p>It saves the info on your browser, no accounts needed</p>
      {storage.map((item) => (
        <CategoryCard
          category={item.category}
          items={item.items}
          reward={item.reward}
          category_id={item.category_id}
          key={item.category_id}
          onChange={handleCheckboxChange}
        />
      ))}
    </div>
  );
};

export default BundleTracker;
