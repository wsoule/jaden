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


export const loveMessages= [
  'your finger tumor',
  'smacking your tushy',
  'your love for helping others',
  'how you strive to make me happy',
  'how we can laugh together',
  'how you are my gamer girl to my gamer boy lifestyle',
  'peepee poopoo',
  'the effort you put in to creating rich bonds with your family',
  'how you care about the thoughts and feelings of others',
  'that you deal with my shenanigans',
  'i can be loud with you',
  ':>',
  'your frog obsession',
  'your armpits',
  'your feet',
  'your legs',
  'our deep conversation',
  'your curly hair',
  'that you put up with my rambling',
  'that you are a girlboss',
  'that you have grit',
  'brushing my teeth with you',
  'how you make me feel at home',
  'making love with you',
  'showering together'
];


const startingItems: ItemsProps = {
  boughtItems: [],
  count: { amount: 0, perSec: 0, perClick: 1},
  clicks: 0,
  hug: { name: 'hug', amount: 0, baseCost: 500, cost: 500, perSec: 0, itemMessages: loveMessages},
  flowers: { name: 'give flowers', amount: 0, baseCost: 30, cost: 30, perSec: 0.2, itemMessages: loveMessages},
  handHold: { name: 'hold hands', amount: 0, baseCost: 100, cost: 100, perSec: 10, itemMessages: loveMessages},
  date: { name: 'go on date', amount: 0, baseCost: 750, cost: 750, perSec: 5, itemMessages: loveMessages},
  dancing: { name: 'dance together', amount: 0, baseCost: 5000, cost: 5000, perSec: 69, itemMessages: loveMessages},
  vacation: { name: 'go on vacation', amount: 0, baseCost: 60000, cost: 60000, perSec: 180, itemMessages: loveMessages},
  makingLove: { name: 'maka da love', amount: 0, baseCost: 69420, cost: 69420, perSec: 750, itemMessages: loveMessages},
  showering: { name: 'shower together', amount: 0, baseCost: 100000, cost: 100000, perSec: 4000, itemMessages: loveMessages},
  child: { name: 'inseminate', amount: 0, baseCost: 30000000, cost: 30000000, perSec: 80085, itemMessages: loveMessages}
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
