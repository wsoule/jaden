import { FC, useContext } from 'react';
import { DataContext } from '../data/data';


export const Clicker: FC = () => {
  const { items, setItems } = useContext(DataContext);

  const onClick = (): void => {
    setItems({
      ...items,
      clicks : items.clicks + 1,
      count : {
        ...items.count,
        amount : items.count.amount + 1
      }
    });
  };

  return (
    <div className='clicker'>
      <h1 id='title' className='counter' >{items.count.amount.toFixed()}</h1>
      <button onClick={onClick} >Click Here</button>
    </div>
  );
};
