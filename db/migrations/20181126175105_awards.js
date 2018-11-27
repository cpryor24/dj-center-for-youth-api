
exports.up = function(knex, Promise) {
  return knex.schema.createTable('awards', (table) => {
    table.increments();
    table.integer('year');
    table.string('award_name');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('awards')
};
