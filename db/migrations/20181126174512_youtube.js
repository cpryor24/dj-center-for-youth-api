exports.up = function(knex, Promise) {
  return knex.schema.createTable('youtube', (table) => {
    table.increments();
    table.string('video_url');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('youtube')
};
