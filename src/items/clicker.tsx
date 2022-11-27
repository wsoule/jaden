import { FC, useContext } from 'react';
import { DataContext } from '../data/data';
import './clicker.css';


export const formatNumber = (number: number, decimal?: number): string => {
  if (number >= 1000000000000000){
    return (number/1000000000000000).toFixed(3) + 'huge';
  }
  if (number >= 1000000000000){
    return (number/1000000000000).toFixed(3) + 'T';
  }
  if (number >= 1000000000){
    return (number/1000000000).toFixed(3) + 'B';
  }
  if (number >= 1000000){
    return (number/1000000).toFixed(3) + 'M';
  }
  return number.toFixed(decimal).toString();
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
      <h1 id='title' className='counter' >Love Count: {formatNumber(items.count.amount)}</h1>
      <h3 className='per-sec'>{formatNumber(items.count.perSec, 1)} Per Second</h3>
      <button className='click-button' onClick={onClick} >Click Here</button>
    </div>
  );
};
