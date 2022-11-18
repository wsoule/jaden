const addButton = document.createElement('button');
addButton.setAttribute('id', 'added');
addButton.setAttribute('style', 'background-color = gray');
addButton.innerText = 'content';
document.getElementById('main').appendChild(addButton);
const counter = document.createElement('p');
document.getElementById('main').appendChild(counter);
counter.setAttribute('id', 'counter');


const buyButton = document.createElement('button');
buyButton.setAttribute('id', 'buy-button');
document.getElementById('main').appendChild(buyButton);


// let numLoads = parseInt(localStorage.getItem('pageLoads'), 10);



// if (isNaN(numLoads) || numLoads <= 0) {
//   localStorage.setItem('pageLoads', '1');
//   localStorage.setItem('items', JSON.stringify({
//     count : {amount : 0, perSec : 0},
//     clicks : 0,
//     grandma : {amount : 0, cost : 2, value : 1}
//   }));
	
// }
// else {
//   localStorage.setItem('pageLoads', (numLoads + 1).toString());
// }

console.log(JSON.parse(localStorage.getItem('items')).count.amount);
counter.innerText = JSON.parse(localStorage.getItem('items')).count.amount.toFixed();
const items = JSON.parse(localStorage.getItem('items'));
buyButton.innerText = `Buy: $${JSON.parse(localStorage.getItem('items')).grandma.cost}`;
console.log(items.count.perSec);


addButton.addEventListener('click', (id) => { 
  items.clicks += 1;
  items.count.amount += 1;
  updateItems();
});

buyButton.addEventListener('click', () => {	
  // buy(JSON.parse(localStorage.getItem('items')).grandma);
  buy(items.grandma);
  updateItems();
  buyButton.innerText = `Buy: $${JSON.parse(localStorage.getItem('items')).grandma.cost}`;
});

// const updateItems = () =>{
//   localStorage.setItem('items', JSON.stringify(items));
//   text = document.getElementById('counter');
//   let val = items.count.amount.toFixed();
//   counter.innerText = val;
//   // console.log(items);
// };

const intervalID = setInterval(() => {
  items.count.amount += (items.count.perSec)/200;
  updateItems();
  // console.log(items.count.amount);
}, 1);

const buy = (item) => {
  if (items.count.amount - item.cost >= 0){
    items.count.amount -= item.cost;
    item.amount += 1;
    item.cost = Math.ceil(Math.pow(item.cost, 1.25));
    console.log('item new item val', item);
    add(intervalID, item);
  }
};

const add = (id, item) => {
  // clearInterval(id);
  items.count.perSec += item.value;
  // return setInterval(() => {
  // 	items.count.amount += items.count.perSec;
  // 	updateItems();
  // 	console.log(items.count.amount);
  // },1000);
};
