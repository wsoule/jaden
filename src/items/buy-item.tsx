import { FC, useContext } from 'react';
import { DataContext, ItemName, ItemProps } from '../data/data';

export interface BuyItemProps {
  itemName : ItemName;
  number? : number;
}


export const BuyItem : FC<BuyItemProps> = ({
  itemName,
  number = 1
}) =>{
  const { items, setItems } = useContext(DataContext);
  const item = items[itemName];
  const canBuy = items.count.amount < item.cost * number;

  const onClick = (): void => {
    if (canBuy){
      return;
    }
    if(item.itemMessages) {
      alert(item.itemMessages[Math.floor(Math.random()* (item.itemMessages.length+1))]);
    }
    const newItemCost = Math.ceil(item.cost * Math.pow(1.15, (item.amount > 0) ? item.amount : 1));
    const newCountAmount = items.count.amount - item.cost * number;
    const newCountPerSec = items.count.perSec + item.perSec * number;
    const newItemAmount = item.amount + number;

    const newItem: ItemProps = {
      ...item,
      amount: newItemAmount,
      cost: newItemCost
    };

    setItems({
      ...items,
      count: {
        ...items.count,
        amount: newCountAmount,
        perSec: newCountPerSec,
        perClick: (item.name === items.item5.name) ? items.count.perClick + 1 : items.count.perClick
      },
      [itemName]: newItem
    });
  };
  return (
    <button disabled={canBuy} onClick={onClick}>Buy {item.name}: ${item.cost}</button>
  );
};
