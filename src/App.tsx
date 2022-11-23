import { ChakraProvider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import './App.css';
import {
  DataContext,
  getItems,
  // itemNames,
  ItemsProps,
  setItems as setStoredItems
} from './data/data';
import { DisplayItems } from './items/display-items';
import { Clicker, ItemContainer } from './items/index';
import { theme } from './theme';

// alert('hello, i love you');


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
    <ChakraProvider theme={theme}>
      <DataContext.Provider value={{ items, setItems }}>
        <div className='container'>
          <Clicker />
          <div className='parent-div'>
            <ItemContainer itemName='flowers' />
            <ItemContainer itemName='hug' />
            <ItemContainer itemName='date' />
            <ItemContainer itemName='item3' />
            <ItemContainer itemName='item4' />
          </div>
          <DisplayItems />
        </div>
      </DataContext.Provider>
    </ChakraProvider>
  );
}

export default App;
