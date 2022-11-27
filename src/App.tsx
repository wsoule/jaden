import { Button, ChakraProvider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
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


function App() : JSX.Element {
  const [open, setOpen] = useState(true);
  const onClose = (): void => {
    setOpen(false);
  };
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
      <Modal isOpen={open} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Love Message</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{'HAPPY 2 YEAR ANNIVERSARY'}</p>
            <p>{'I love you very much!'}</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
                      Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <DataContext.Provider value={{ items, setItems }}>
        <div className='container'>
          <Clicker />
          <div className='parent-div'>
            <ItemContainer itemName='hug' />
            <ItemContainer itemName='flowers' />
            <ItemContainer itemName='date' />
            <ItemContainer itemName='handHold' />
            <ItemContainer itemName='dancing' />
            <ItemContainer itemName='makingLove' />
            <ItemContainer itemName='showering' />
          </div>
          <DisplayItems />
        </div>
      </DataContext.Provider>
    </ChakraProvider>
  );
}

export default App;
