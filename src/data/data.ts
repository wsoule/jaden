// if (test === '') {

const numLoads = parseInt(localStorage.getItem('pageLoads'), 10);

export interface ItemsProps {
  count : {amount : number, perSec : number};
  clicks : number;
  item1 : {name : string, amount : number, cost : 2, perSec : 1};
}

const items = {
  count : {amount : 0, perSec : 0},
  clicks : 0,
  item1 : {name: 'item1', amount : 0, cost : 2, value : 1}
};

if (isNaN(numLoads) || numLoads <= 0) {
  localStorage.setItem('pageLoads', '1');
  localStorage.setItem('items', JSON.stringify(items));

}
else {
  localStorage.setItem('pageLoads', (numLoads + 1).toString());
}

export const setItems = () : void =>{
  localStorage.setItem('items', JSON.stringify(items));
};

export const getItems = () : ItemsProps => {
  return JSON.parse(localStorage.getItem('items')) ?? items;
};
