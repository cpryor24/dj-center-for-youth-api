exports.up = function(knex, Promise) {
  return knex.schema.createTable('resources', (table) => {
    table.increments();
    table.string('business_name').unique();
    table.text('url');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resources');
};
