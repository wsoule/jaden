import { createContext } from 'react';

export type ItemName = 'item1' | 'item2';

const startingItems: ItemsProps = {
  count: { amount: 0, perSec: 0 },
  clicks: 0,
  item1: { name: 'item1', amount: 0, cost: 2, perSec: 1 },
  item2: { name: 'item2', amount: 0, cost: 5, perSec: 5 }
};

export interface ItemProps<T extends ItemName> {
  name: T;
  amount: number;
  cost: number;
  perSec: number;
}

export type ItemsProps = {
  [K in ItemName]: ItemProps<K>;
} & {
  count: {amount: number, perSec: number};
  clicks: number;
};

export const setItems = (items: ItemsProps): void =>{
  localStorage.setItem('items', JSON.stringify(items));
};

export const getItems = (): ItemsProps => {
  const storedItems = localStorage.getItem('items');
  return (storedItems) ? JSON.parse(storedItems) : startingItems;
};

export interface DataContextType {
  items: ItemsProps;
  setItems: (items: ItemsProps) => void;
}

export const DataContext = createContext<DataContextType>({
  items: getItems(),
  setItems: () => {
    // Intentionally left blank.
  }
});
