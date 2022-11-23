import { createContext } from 'react';

export type ItemName = 'hug' | 'date' | 'item3' | 'item4' | 'flowers';


export interface ItemProps {
  name: string;
  amount: number;
  cost: number;
  perSec: number;
  itemMessages?: string[];
}

export interface ItemsProps extends Record<ItemName, ItemProps> {
  boughtItems?: ItemName[];
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


export const item2Messages = [
  'blah blah blah',
  'thing 2'
];

export const item3Messages = [
  'blah blah blah',
  'thing 2'
];

export const item4Messages = [
  'blah blah blah',
  'thing 2'
];

export const item5Messages = [
  'blah blah blah',
  'thing 2'
];

export const item1Messages = [
  'blah blah blah',
  'thing 2'
];

const startingItems: ItemsProps = {
  boughtItems: [],
  count: { amount: 0, perSec: 0, perClick: 1},
  clicks: 0,
  hug: { name: 'hug', amount: 0, cost: 5, perSec: 0.2, itemMessages : item1Messages},
  date: { name: 'date', amount: 0, cost: 5, perSec: 1, itemMessages: item2Messages},
  item3: { name: 'item3', amount: 0, cost: 5, perSec: 10, itemMessages: item3Messages},
  item4: { name: 'item4', amount: 0, cost: 5, perSec: 20, itemMessages: item4Messages},
  flowers: { name: 'flowers', amount: 0, cost: 5, perSec: 0}
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
