
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (table) => {
    table.increments();
    table.string('title');
    table.text('description');
    table.text('img_url');
    table.date('date');
    table.time('time');
    table.text('venue');
    table.text('address');
    table.boolean('isActive').defaultTo(true);
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
