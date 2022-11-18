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

    const newItemCost = Math.ceil(Math.pow(item.cost, 1.25));
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
        perSec: newCountPerSec
      },
      [itemName]: newItem
    });
  };
  return (
    <button disabled={canBuy} onClick={onClick}>Buy {itemName}: ${item.cost}</button>
  );
};
