
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (table) => {
    table.increments();
    table.string('title');
    table.string('description');
    table.text('img_url');
    table.date('date');
    table.time('time');
    table.string('venue');
    table.string('address');
    table.boolean('isActive').defaultTo(true);
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
