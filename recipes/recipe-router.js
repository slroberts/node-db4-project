const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Failed to get recipes.',
      });
    });
});

router.get('/:id/shoppingList', validateRecipeId, (req, res) => {
  const { id } = req.params;
  Recipes.getShoppingList(id)
    .then((ingredients) => {
      res.status(200).json(ingredients);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get shopping list.' });
    });
});

router.get('/:id/instructions', validateRecipeId, (req, res) => {
  const { id } = req.params;
  Recipes.getInstructions(id)
    .then((step) => {
      res.status(200).json(step);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get instructions.' });
    });
});

function validateRecipeId(req, res, next) {
  Recipes.getRecipesById(req.params.id).then((recipe) => {
    recipe ? next() : res.status(400).json({ message: 'invalid recipe id' });
  });
}
module.exports = router;
