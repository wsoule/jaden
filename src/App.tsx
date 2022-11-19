import { useEffect, useState } from 'react';
import './App.css';
import {
  DataContext,
  getItems,
  // itemNames,
  ItemsProps,
  setItems as setStoredItems
} from './data/data';
import { Clicker, ItemContainer } from './items/index';

alert('hello, i love you');

function App() : JSX.Element {

  const [items, setStateItems] = useState(getItems());
  const setItems = (newItems: ItemsProps): void => {
    setStateItems(newItems);
    setStoredItems(newItems);
  };
  const refreshRate = 100;

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
        <div className='parent-div'>
          <ItemContainer itemName='item5' />
          <ItemContainer itemName='item1' />
          <ItemContainer itemName='item2' />
          <ItemContainer itemName='item3' />
          <ItemContainer itemName='item4' />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
