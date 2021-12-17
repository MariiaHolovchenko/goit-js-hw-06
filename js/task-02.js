const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const list = ingredients.map(item => {
    
    const ingredientItem = document.createElement(`li`);
    ingredientItem.textContent = item;
    ingredientItem.setAttribute('class', 'item');
    return ingredientItem;
});

const ulItem = document.querySelector(`ul#ingredients`);
ulItem.append(...list);
