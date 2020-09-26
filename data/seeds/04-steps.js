exports.seed = function (knex) {
  // Inserts seed entries
  return knex('steps').insert([{ step: 'rowValue1', recipe_id: 1 }]);
};
