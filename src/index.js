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
