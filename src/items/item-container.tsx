import { BuyItem } from './index';
import { DataContext, ItemName } from '../data/data';
import { FC, useContext } from 'react';


export interface ItemContainerProps {
  itemName : ItemName
}

export const ItemContainer: FC<ItemContainerProps> = ({ itemName }) => {
  const { items } = useContext(DataContext);
  const item = items[itemName];

  return (
    <div className='child-div'>
      <p>{item.name} count: {item.amount}</p>
      <p>Per Sec: {item.perSec}</p>
      <BuyItem itemName={itemName} number={1} />
    </div>
  );
};

