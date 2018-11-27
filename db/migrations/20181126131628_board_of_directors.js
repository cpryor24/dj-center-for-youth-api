
exports.up = function(knex, Promise) {
  return knex.schema.createTable('boardOfDirectors', (table) => {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('title');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('boardOfDirectors')
};
