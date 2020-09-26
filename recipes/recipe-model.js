const db = require('../data/db-config');
module.exports = {
  getRecipes,
  getRecipesById,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db('recipes');
}

function getRecipesById(id) {
  return db('recipes').where({ id }).first();
}

function getShoppingList(recipe_id) {
  return db('recipes_ingredients')
    .join('ingredients as i', 'i.id', '=', 'recipes_ingredients.ingredient_id')
    .select('i.ingredient', 'i.quantity')
    .where({ recipe_id })
    .first();
}

function getInstructions(recipe_id) {
  return db('steps')
    .join('recipes as r', 'r.id', '=', 'steps.recipe_id')
    .select('r.recipe_name', 'steps.step')
    .where({ recipe_id })
    .first();
}
