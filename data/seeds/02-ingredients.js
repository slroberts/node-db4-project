exports.seed = function (knex) {
  // Inserts seed entries
  return knex('ingredients').insert([{ ingredient: 'Test', quantity: 1.2 }]);
};
