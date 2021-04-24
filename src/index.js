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

/***objednávka ***/

const order = document.querySelector('.order-btn');
const selectedOrder = document.querySelector('.drink__cup');

order.addEventListener('click', (e) => {
  const buttonAfterClick = e.target;
  selectedOrder.classList.toggle('drink__cup--selected');
  order.textContent = 'Zrušit';
});
