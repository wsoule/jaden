// if (test === '') {
export const setItems = (name: string, items: object): void => {
  localStorage.setItem(name, JSON.stringify(items));
};

export interface ItemsProps {
  cookies : {amount : number},
  grandma : {amount : number, cost : number, perSec: number}
}

export const checkItems = (name: string): ItemsProps => {
  let items = JSON.parse(localStorage.getItem(name) ?? '{\n"nothing" : "nothing"\n}');
  if (items.nothing === 'nothing'){
    items = {
      cookies : {
        amount : 0
      },
      grandma : {
        amount : 0,
        cost : 100,
        perSec : 2
      }
    };
    setItems(name, items);
  }
  return items;
};
