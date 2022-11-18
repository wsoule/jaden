import { createContext } from 'react';

export type ItemName = 'item1' | 'item2' | 'item3' | 'item4';

export const itemNames: ItemName[] = ['item1', 'item2', 'item3', 'item4'];

const startingItems: ItemsProps = {
  count: { amount: 0, perSec: 0 },
  clicks: 0,
  item1: { name: 'actual name', amount: 0, cost: 100, perSec: 1 },
  item2: { name: 'item2', amount: 0, cost: 1000, perSec: 5 },
  item3: { name: 'item3', amount: 0, cost: 5000, perSec: 10},
  item4: { name: 'item4', amount: 0, cost: 10000, perSec: 15}
};

export interface ItemProps {
  name: string;
  amount: number;
  cost: number;
  perSec: number;
}

export interface ItemsProps extends Record<ItemName, ItemProps> {
  count: {amount: number, perSec: number};
  clicks: number;
}

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
