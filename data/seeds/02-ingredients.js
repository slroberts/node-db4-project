exports.seed = function (knex) {
  // Inserts seed entries
  return knex('table_name').insert([{ ingredient: 'Test', quantity: '1.2' }]);
};
