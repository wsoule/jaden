import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { FC, useContext, useState } from 'react';
import { DataContext, ItemName, ItemProps } from '../data/data';
import './buy-item.css';


export interface BuyItemProps {
  itemName : ItemName;
  number? : number;
}


export const BuyItem : FC<BuyItemProps> = ({
  itemName,
  number = 1
}) =>{

  const [ modalMessage, setModalMessage ] = useState<string | null>(null);
  const { items, setItems } = useContext(DataContext);
  const item = items[itemName];
  const canBuy = items.count.amount < item.cost * number;
  const onClose = ():void => {
    setModalMessage(null);
  };



  const onClick = (): void => {

    if (canBuy){
      return;
    }

    if(item.itemMessages?.length){
      setModalMessage(item.itemMessages[Math.floor(Math.random()* (item.itemMessages.length))]);
    }
    const newItemCost = Math.ceil(item.cost * Math.pow(1.15, (item.amount > 0) ? item.amount : 1));
    const newCountAmount = items.count.amount - item.cost * number;
    const newCountPerSec = items.count.perSec + item.perSec * number;
    const newItemAmount = item.amount + number;

    const newItem: ItemProps = {
      ...item,
      amount: newItemAmount,
      cost: newItemCost
    };

    setItems({
      ...items,
      count: {
        ...items.count,
        amount: newCountAmount,
        perSec: newCountPerSec,
        perClick: (item.name === items.item5.name) ? items.count.perClick + 1 : items.count.perClick
      },
      [itemName]: newItem
    });
  };
  return (
    <>
      <Button className='buy-button' colorScheme={'gray'} variant={'solid'} disabled={canBuy} onClick={onClick}>Buy {item.name}: ${item.cost}</Button>
      <Modal isOpen={!!modalMessage} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{modalMessage}</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
                      Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
