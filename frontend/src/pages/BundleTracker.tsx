/* eslint-disable */
import React, { useEffect } from 'react';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {
  BundleCategory,
  DataProps,
  HandleCheckboxChangeProps
} from '../types';

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
      if (item.categoryId === categoryId) {
        const newItem = item.items.map((subItem) => {
          if (subItem.bundleId === bundleId) {
            const newSubItem = subItem.bundleItems.map((bundleItem) => {
              if (bundleItem.itemId === itemId) {
                const newItem = { ...bundleItem, checked: !bundleItem.checked };
                return newItem;
              }
              return bundleItem;
            });
            return { ...subItem, bundleItems: newSubItem };
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
          categoryId={item.categoryId}
          key={item.categoryId}
          onChange={handleCheckboxChange}
        />
      ))}
    </div>
  );
};

export default BundleTracker;
