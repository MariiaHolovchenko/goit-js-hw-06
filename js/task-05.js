const input = document.querySelector('input#name-input');
const greeting = document.querySelector('span#name-output');

input.addEventListener('input', (item) => {
  if (item.target.value.length !== 0) {
    greeting.innerHTML = item.target.value;
  } else {
    greeting.innerHTML = 'Anonymous';
  }
});