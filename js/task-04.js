const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector('span#value');
let counterValue = 0;
counterValue = Number(counter.textContent);

increment.addEventListener('click', () => {
  counter.innerHTML =  counterValue += 1;
});

decrement.addEventListener('click', () => {
  counter.innerHTML =  counterValue -= 1;
});