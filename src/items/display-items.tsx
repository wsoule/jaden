import { FC, useContext } from 'react';
import { DataContext, ItemName } from '../data/data';
import './display-items.css';
import hugImg from '../img/hug.png';
import dateImg from '../img/date.png';
import flowerImg from '../img/flower.png';
import childImg from '../img/child.png';
import vacationImg from '../img/vacation.png';
import handHoldImg from '../img/handHold.png';
import dancingImg from '../img/dance.png';
import makeLoveImg from '../img/makingLove.png';
import showeringImg from '../img/shower.png';


const switchFunc = (item: ItemName): string => {
  switch (item) {
    case 'hug':
      return hugImg;
    case 'flowers':
      return flowerImg;
    case 'handHold':
      return handHoldImg;
    case 'date':
      return dateImg;
    case 'dancing':
      return dancingImg;
    case 'vacation':
      return vacationImg;
    case 'makingLove':
      return makeLoveImg;
    case 'showering':
      return showeringImg;
    case 'child':
      return childImg;
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
