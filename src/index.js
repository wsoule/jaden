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


let numLoads = parseInt(localStorage.getItem('pageLoads'), 10);



if (isNaN(numLoads) || numLoads <= 0) { 
	localStorage.setItem('pageLoads', '1'); 
	localStorage.setItem('items', JSON.stringify({
		count : {amount : 0, perSec : 0},
		clicks : 0,
		grandma : {amount : 0, cost : 2, value : 1}
	})) 
	
}
else {
	localStorage.setItem('pageLoads', (numLoads + 1).toString()); 
}

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

const updateItems = () =>{
	localStorage.setItem('items', JSON.stringify(items));	
	text = document.getElementById('counter');
	let val = items.count.amount.toFixed();
	counter.innerText = val;
	// console.log(items);
}

const intervalID = setInterval(() => {
	items.count.amount += (items.count.perSec)/200;
	updateItems();
	// console.log(items.count.amount);
}, 1);

const buy = (item) => {
	if (items.count.amount - item.cost >= 0){
		items.count.amount -= item.cost;
		item.amount += 1;
		item.cost = Math.ceil(Math.pow(item.cost,1.25));
		console.log('item new item val', item);
		add(intervalID, item);
	}
}

const add = (id, item) => {
	// clearInterval(id);
	items.count.perSec += item.value
	// return setInterval(() => {
	// 	items.count.amount += items.count.perSec;
	// 	updateItems();
	// 	console.log(items.count.amount);
	// },1000);
}


// const num = [1,2,3,4,5,6];
// const [ a , b, ...others] = num;
// const unorderedList = document.createElement('ul');
// document.getElementById('main').appendChild(unorderedList);

// const redSlider = document.createElement('input');
// redSlider.setAttribute('type', 'range');
// redSlider.setAttribute('min', '0');
// redSlider.setAttribute('max', '256');
// redSlider.setAttribute('value', '128');
// document.getElementById('main').appendChild(redSlider);
// const redInput = document.createElement('p');
// redInput.setAttribute('id', 'redInput');
// document.getElementById('main').appendChild(redInput);
// redInput.innerText = redSlider.value;
// redSlider.oninput = function() { 
// 	redInput.innerText = this.value 
// 	addButton.setAttribute('style', `background-color : rgb(${this.value}, ${blueSlider.value}, ${greenSlider.value})`);
// };
// const blueSlider = document.createElement('input');
// blueSlider.setAttribute('type', 'range');
// blueSlider.setAttribute('min', '0');
// blueSlider.setAttribute('max', '256');
// blueSlider.setAttribute('value', '128');
// document.getElementById('main').appendChild(blueSlider);
// const blueInput = document.createElement('p');
// blueInput.setAttribute('id', 'blueInput');
// document.getElementById('main').appendChild(blueInput);
// blueInput.innerText = blueSlider.value;
// blueSlider.oninput = function() { 
// 	blueInput.innerText = this.value 
// 	addButton.setAttribute('style', `background-color : rgb(${redSlider.value}, ${this.value}, ${greenSlider.value})`);
// };
// const greenSlider = document.createElement('input');
// greenSlider.setAttribute('type', 'range');
// greenSlider.setAttribute('min', '0');
// greenSlider.setAttribute('max', '256');
// greenSlider.setAttribute('value', '128');
// document.getElementById('main').appendChild(greenSlider);
// const greenInput = document.createElement('p');
// greenInput.setAttribute('id', 'greenInput');
// document.getElementById('main').appendChild(greenInput);
// greenInput.innerText = greenSlider.value;
// greenSlider.oninput = function() { 
// 	greenInput.innerText = this.value 
// 	addButton.setAttribute('style', `background-color : rgb(${redSlider.value}, ${blueSlider.value}, ${this.value})`);
// };
// function createSlider(sliderName, valueName) {
// 	const slider = document.createElement('input');
// 	slider.setAttribute('type', 'range');
// 	slider.setAttribute('min', '0');
// 	slider.setAttribute('max', '256');
// 	slider.setAttribute('value', '128');
// 	slider.setAttribute('id', `${sliderName}`);
// 	document.getElementById('main').appendChild(slider);
// 	const input = document.createElement('p');
// 	input.setAttribute('id', `${valueName}`);
// 	document.getElementById('main').appendChild(input);
// 	input.innerText = slider.value;
// }

// createSlider('redSlider','redInput');
// for (let i = 0; i < 257; i++){
// 	const listItem = document.createElement('li');
// 	const textNode = document.createTextNode('red ' + i);
// 	listItem.appendChild(textNode);
// 	listItem.addEventListener('click', () => {
// 		addButton.setAttribute('style', `background-color: rgb(${i}, 256, 256)`);
// 	})
// 	unorderedList.appendChild(listItem);
// }
