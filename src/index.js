import './style.css';

console.log('funguju!');
const navigation = document.querySelector('nav');
const allItems = document.querySelectorAll('.nav_link');
const nav = document.querySelectorAll('#nav-btn');

nav.addEventListener('click', (e) => {
  navigation.classList.toggle('nav');
});

allItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    navigation.classList.toggle('nav-closed');
  });
});

//*const inputElm = document.querySelector('#form-input');
//const buttonElm = document.querySelector('#form-button');
//const alertElm = document.querySelector('#form-alert');

//buttonElm.addEventListener('click', (event) => {
// alertElm.textContent = `Uživatel ${inputElm.value} už existuje.`;
// event.target.textContent = 'Zkusit znova';
//});

//

/***objednávka ***/
const order = document.querySelector('.order-btn');
const selectedOrder = document.querySelector('.drink__cup');
const btnWhenClick = e.target;

order.addEventListener('click', (e) => {
  if (ordered === false) {
    btnWhenClickElm.classList.add('drink__cup--selected');
    btnWhenClickElm.textContent = 'Zrušit';
    ordered = true;
  } else {
    btnWhenClickElm.classList.remove('drink__cup--selected');
    btnWhenClickElm.textContent = 'Objednat';
    ordered = false;
  }
});

////****5-ingredience jako komponenty */
const Layer = (text) => {
  return `<h1>${text}</h1>`;
};
const appElm = document.querySelector('#app');
appElm.innerHTML = {
  color: '#feeeca',
  label: 'mléčná pěna',
};

/****6-seznam ingrediencí */

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

const appElm = document.querySelector('.drink__info');

layers.forEach((layer) => {
  appElm.innerHTML + Layer(layer);
  appElm.innerHTML = Layer(layer);
});

//*7-Nápoj jako komponenta*//

export const Drink = (props) => {
  const drink = document.createElm('div');
  drink.classList.add('drink');
};

//
const drinkProduct = document.createElm('div');
drinkProduct.classList.add('drink__product');
drink.appendChild(drinkProduct);

const drinkCup = document.createElm('img');
img.src = `/assets/cups/${props.id}.png`;
drinkCup.appendChild(img);

const drinkInfo = document.createElm('div');
drinkInfo.classList.add('drink__info');
drinkProduct.appendChild(drinkInfo);

const DrinkInfoH3 = document.createElm('h3');
drinkInfoH3.textContent = props.name;
drinkInfo.appendChild(drinkInfoH3);
