import { FC, useState } from 'react';
import { checkItems } from '../data/data';

const items = checkItems('SetItems');

export interface ButtonProps {
  onClickFunction : () => void;
  number : number;
}

export interface CounterProps {
  num : number;
  objectItem : 'grandma' | 'cookies';
}

export const Button : FC<ButtonProps> = ({ onClickFunction, number }) =>{
  return <button onClick={onClickFunction}>{number}</button>;
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
