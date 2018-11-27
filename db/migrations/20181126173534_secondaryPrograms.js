
exports.up = function(knex, Promise) {
  return knex.schema.createTable('secondaryPrograms', (table) => {
    table.increments();
    table.string('title');
    table.string('description');
    table.integer('grantor_id')
      .notNullable()
      .references('id')
      .inTable('grantors')
      .onDelete('cascade')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('secondaryPrograms');
};
