import { createContext } from 'react';

export type ItemName = 'item1' | 'item2' | 'item3' | 'item4' | 'item5';

export const itemNames: ItemName[] = ['item1', 'item2', 'item3', 'item4'];

export interface ItemProps {
  name: string;
  amount: number;
  cost: number;
  perSec: number;
  itemMessages?: string[];
}

export interface ItemsProps extends Record<ItemName, ItemProps> {
  count: {amount: number, perSec: number, perClick : number};
  clicks: number;
}

export const setItems = (items: ItemsProps): void =>{
  localStorage.setItem('items', JSON.stringify(items));
};


export interface DataContextType {
  items: ItemsProps;
  setItems: (items: ItemsProps) => void;
}


export const item1Messages = [
  'blah blah blah'
];

const startingItems: ItemsProps = {
  count: { amount: 0, perSec: 0, perClick: 1},
  clicks: 0,
  item1: { name: 'hug', amount: 0, cost: 5, perSec: 0.2, itemMessages : item1Messages},
  item2: { name: 'date', amount: 0, cost: 5, perSec: 1 },
  item3: { name: 'item3', amount: 0, cost: 5, perSec: 10},
  item4: { name: 'item4', amount: 0, cost: 5, perSec: 20},
  item5: { name: 'addClick', amount: 0, cost: 5, perSec: 0}
};

export const getItems = (): ItemsProps => {
  const storedItems = localStorage.getItem('items');
  return (storedItems) ? JSON.parse(storedItems) : startingItems;
};

export const DataContext = createContext<DataContextType>({
  items: getItems(),
  setItems: () => {
    // Intentionally left blank.
  }
});
