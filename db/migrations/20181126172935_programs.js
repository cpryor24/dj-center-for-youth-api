
exports.up = function(knex, Promise) {
  return knex.schema.createTable('programs', (table) => {
    table.increments();
    table.string('title');
    table.text('description');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('programs')
};
