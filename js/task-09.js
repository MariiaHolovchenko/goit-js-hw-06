function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector('button.change-color')


colorBtn.addEventListener('click', () => {
  
  const spanElement = document.querySelector('span.color')
  spanElement.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
});





