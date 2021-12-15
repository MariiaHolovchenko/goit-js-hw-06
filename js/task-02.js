const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


for (const ingredient of ingredients) {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredient;
  ingredientItem.setAttribute('class', 'item');
  document.querySelector('ul#ingredients').appendChild(ingredientItem);
}