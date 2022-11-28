import { createContext } from 'react';

export type ItemName = 'hug' | 'date' | 'handHold' | 'dancing' | 'flowers' | 'makingLove' | 'showering' | 'vacation' | 'child';


export interface ItemProps {
  name: string;
  amount: number;
  baseCost: number;
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


const startingItems: ItemsProps = {
  boughtItems: [],
  count: { amount: 0, perSec: 0, perClick: 1},
  clicks: 0,
  hug: { name: 'hug', amount: 0, baseCost: 15, cost: 1, perSec: 0},
  flowers: { name: 'give flowers', amount: 0, baseCost: 15, cost: 15, perSec: 0.2},
  handHold: { name: 'hold hands', amount: 0, baseCost: 15, cost: 3, perSec: 10},
  date: { name: 'go on date', amount: 0, baseCost: 15, cost: 4, perSec: 1},
  dancing: { name: 'dance together', amount: 0, baseCost: 15, cost: 5, perSec: 20},
  vacation: { name: 'go on vacation', amount: 0, baseCost: 15, cost: 6, perSec: 500},
  makingLove: { name: 'make love', amount: 0, baseCost: 15, cost: 7, perSec: 50},
  showering: { name: 'shower together', amount: 0, baseCost: 15, cost: 8, perSec: 100},
  child: { name: 'have child', amount: 0, baseCost: 15, cost: 9, perSec: 9999}
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
