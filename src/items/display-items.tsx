import { FC, useContext } from 'react';
import { DataContext, ItemName } from '../data/data';
import './display-items.css';
import hugImg from '../img/hug.png';
import dateImg from '../img/date.png';
import flowerImg from '../img/flower.png';


const switchFunc = (item: ItemName): string => {
  switch (item) {
    case 'hug':
      return hugImg;
    case 'date':
      return dateImg;
    case 'handHold':
    case 'dancing':
      return '';
    case 'flowers':
      return flowerImg;
    case 'makingLove':
      return '';
    case 'showering':
      return '';
  }
};

export const DisplayItems: FC = () => {
  const { items } = useContext(DataContext);

  return (
    <div className='items-pics-box'>
      {  items.boughtItems?.map((item: ItemName) => {
        return <img className='images-in-box' height='30px' width='30px' src={switchFunc(item)} />;
      })}
    </div>

  );
};
