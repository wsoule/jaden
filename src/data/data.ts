import { createContext } from 'react';

export type ItemName = 'hug' | 'date' | 'handHold' | 'dancing' | 'flowers' | 'makingLove' | 'showering';


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
  count: { amount: 0, perSec: 0, perClick: 1},
  clicks: 0,
  flowers: { name: 'give flowers', amount: 0, cost: 10, perSec: 0.2, itemMessages : hugMessages},
  date: { name: 'go on date', amount: 0, cost: 100, perSec: 1, itemMessages: dateMessages},
  handHold: { name: 'hold hands', amount: 0, cost: 500, perSec: 10, itemMessages: item3Messages},
  dancing: { name: 'dance together', amount: 0, cost: 1000, perSec: 20, itemMessages: item4Messages},
  hug: { name: 'hug', amount: 0, cost: 500, perSec: 0},
  makingLove: { name: 'make love', amount: 0, cost: 2000, perSec: 50},
  showering: { name: 'shower together', amount: 0, cost: 50, perSec: 100}
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
