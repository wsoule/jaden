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
    case 'item3':
    case 'item4':
      return '';
    case 'flowers':
      return flowerImg;
  }
};

export const DisplayItems: FC = () => {
  const { items } = useContext(DataContext);



  return (
    <div className='items-pics-box'>
      {  items.boughtItems?.map((item: ItemName) => {

        return <img className='images-in-box' height='20px' width='20px' src={switchFunc(item)} />;
      })}
    </div>

  );
};
