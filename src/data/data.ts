import { createContext } from 'react';

export type ItemName = 'hug' | 'date' | 'item3' | 'item4' | 'flowers' | 'item6' | 'item7';


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


export const dateMessages= [
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

export const flowersMessages = [
  'blah blah blah',
  'thing 2'
];

export const hugMessages = [
  'blah blah blah',
  'thing 2'
];

const startingItems: ItemsProps = {
  boughtItems: [],
  count: { amount: 10000000, perSec: 0, perClick: 1},
  clicks: 0,
  hug: { name: 'hug', amount: 0, cost: 999999, perSec: 0.2, itemMessages : hugMessages},
  date: { name: 'date', amount: 0, cost: 5, perSec: 1, itemMessages: dateMessages},
  item3: { name: 'item3', amount: 0, cost: 5, perSec: 10, itemMessages: item3Messages},
  item4: { name: 'item4', amount: 0, cost: 5, perSec: 20, itemMessages: item4Messages},
  flowers: { name: 'flowers', amount: 0, cost: 999999, perSec: 0},
  item6: { name: 'item6', amount: 0, cost: 10, perSec: 10},
  item7: { name: 'item7', amount: 0, cost: 0, perSec: 100}
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
