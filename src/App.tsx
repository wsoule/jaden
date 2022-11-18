import { useEffect, useState } from 'react';
import './App.css';
import {
  DataContext,
  getItems,
  ItemsProps,
  setItems as setStoredItems
} from './data/data';
import { BuyItem, Clicker } from './items/index';

function App() : JSX.Element {
  const [items, setStateItems] = useState(getItems());
  const setItems = (newItems: ItemsProps): void => {
    setStateItems(newItems);
    setStoredItems(newItems);
  };
  const refreshRate = 500;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStateItems((items) => {
        const newItems = {
          ...items,
          count : {
            ...items.count,
            amount : items.count.amount + items.count.perSec * (refreshRate / 1000)
          }
        };

        setStoredItems(newItems);

        return newItems;
      });
    }, refreshRate);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <DataContext.Provider value={{ items, setItems }}>
      <div className='container'>
        <Clicker />
        <BuyItem itemName='item1' number={1} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
