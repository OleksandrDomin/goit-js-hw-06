const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");


const ingredientElements = ingredients.map((ingredient) => {
  const ingredientElement = document.createElement("li");
  ingredientElement.textContent = ingredient;
  ingredientElement.classList = "item";
  return ingredientElement
});

ingredientsList.append(...ingredientElements);
console.log(ingredientsList);