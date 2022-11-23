import { FC, useContext } from 'react';
import { DataContext } from '../data/data';
import './clicker.css';

const formatNumber = (number : number): string => {
  if (number >= 1000000000000000){
    return (number/1000000000000000).toFixed(3) + 'huge';
  }
  if (number >= 1000000000000){
    return (number/1000000000000).toFixed(3) + 'T';
  }
  if (number >= 1000000000){
    return (number/1000000000).toFixed(3) + 'B';
  }
  return number.toFixed().toString();
};

export const Clicker: FC = () => {
  const { items, setItems } = useContext(DataContext);

  const onClick = (): void => {
    setItems({
      ...items,
      clicks : items.clicks + 1,
      count : {
        ...items.count,
        amount : items.count.amount + items.count.perClick
      }
    });
  };

  return (
    <div className='clicker'>
      <h1 id='title' className='counter' >{formatNumber(items.count.amount)}</h1>
      <button className='click-button' onClick={onClick} >Click Here</button>
    </div>
  );
};
