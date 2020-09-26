exports.up = function (knex) {
  return knex.schema
    .createTable('recipes', (tbl) => {
      tbl.increments();
      tbl.string('recipe_name', 255).notNullable();
      tbl.text('steps').notNullable();
    })
    .createTable('ingredients', (tbl) => {
      tbl.increments();
      tbl.string('ingredient', 255).notNullable();
      tbl.float('quantity').notNullable();
    })
    .createTable('steps', (tbl) => {
      tbl.increments();
      tbl.string('step', 255).notNullable();
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('recipes_ingredients', (tbl) => {
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.primary(['recipe_id', 'ingredient_id']);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
