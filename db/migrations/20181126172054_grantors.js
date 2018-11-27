exports.up = function(knex, Promise) {
  return knex.schema.createTable('grantors', (table) => {
    table.increments();
    table.string('title');
    table.text('description');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('grantors')
};
