import { BuyItem } from './index';
import { DataContext, ItemName } from '../data/data';
import { FC, useContext } from 'react';
import calcImageUrl from '../img/cALC.jpg';
import hugImageUrl from '../img/hug.gif';
import dateImageUrl from '../img/date.gif';
// import image2 from '../img/cALC.jpg';

export interface ItemContainerProps {
  itemName : ItemName
}

export function getItemImageUrl(itemName: ItemName): string | null {
  switch (itemName) {
    case 'item1':
      return hugImageUrl;
    case 'item2':
      return dateImageUrl;
    case 'item3':
      return null;
    case 'item4':
      return calcImageUrl;
    case 'item5':
      return null;
    default: {
      const invalidItemName: never = itemName;
      throw new Error(`Item name ${invalidItemName} does not have an image.`);
    }
  }
}

export const ItemContainer: FC<ItemContainerProps> = ({ itemName }) => {
  const { items } = useContext(DataContext);
  const item = items[itemName];
  const media = {
    backgroundImage : `url(${getItemImageUrl(itemName)})`,
    backgroundSize : '100% 100%',
    backgroundRepeat : 'no-repeat'
    // backgroundColor : 'pink'
  };
  const perSecMessage = (item.name === items.item5.name) ?
    <p className='item-persec'>Add {items.count.perClick + 1} Per Click</p>
    :
    <p className='item-persec'>Per Sec: {item.perSec}</p>;

  return (
    <div className='child-div' style={media} >
      <p className='item-name'>{item.name}</p>
      <p className='item-count'>count: {item.amount}</p>
      {perSecMessage}
      <BuyItem itemName={itemName} number={1} />
    </div>
  );
};
