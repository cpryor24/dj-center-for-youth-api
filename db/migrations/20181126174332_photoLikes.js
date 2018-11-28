
exports.up = function(knex, Promise) {
  return knex.schema.createTable('photoLikes', (table) => {
    table.increments();
    table.integer('likes');
    table.integer('photo_id')
      .notNullable()
      .references('id')
      .inTable('photos')
      .onDelete('cascade')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('photoLikes')
};
