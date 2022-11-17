import { FC, useState } from 'react';
import { getItems, setItems } from '../data/data';

export interface BuyItemProps {
  itemName : 'item1';
  number? : number;
}


export const BuyItem : FC<BuyItemProps> = ({ itemName, number = 1 }) =>{
  const items = getItems();

  if(items.count.amount - items[itemName].cost) {
    const [itemCost, setItemCost] = useState(items[itemName].cost);
    const [countAmount, setCountAmount] = useState(items.count.amount);
    const [itemAmount, setItemAmount] = useState(items[itemName].amount);
    const [countPerSec, setCountPerSec] = useState(items.count.perSec);

    setItemCost(Math.ceil(Math.pow(itemCost, 1.25)));
    setCountAmount(countAmount - itemCost * number);
    setItemAmount(itemAmount + number);
    setCountPerSec(countPerSec + items[itemName].perSec);

    setItems();
  }
  return (
    <button>Buy {itemName}: ${items[itemName].cost}</button>
  );
};

export const Count : FC<CounterProps> = ({ num, objectItem }) => {
  const [value, setValue] = useState(items[objectItem].amount);

  const increment = () : void => {
    const newValue = value + num;
    setValue(newValue);
    items[objectItem].amount = newValue;
    localStorage.setItem('items', JSON.stringify(items));
  };

  return (
    <div>
      <Button onClickFunction={increment} number={num} />
    </div>
  );
};
