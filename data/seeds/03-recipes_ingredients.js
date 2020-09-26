exports.seed = function (knex) {
  // Inserts seed entries
  return knex('table_name').insert([{ recipe_id: 1, ingredient_id: 1 }]);
};
