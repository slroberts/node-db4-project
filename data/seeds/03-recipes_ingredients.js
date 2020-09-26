exports.seed = function (knex) {
  // Inserts seed entries
  return knex('recipes_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1 },
  ]);
};
