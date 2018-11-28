exports.up = function(knex, Promise) {
  return knex.schema.createTable('photos', (table) => {
    table.increments();
    table.text('img_url');
    table.integer('secondaryProgram_id')
      .notNullable()
      .references('id')
      .inTable('secondaryPrograms')
      .onDelete('cascade')
      .index();
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('photos');
};
