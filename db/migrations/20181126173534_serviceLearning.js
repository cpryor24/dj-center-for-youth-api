
exports.up = function(knex, Promise) {
  return knex.schema.createTable('serviceLearning', (table) => {
    table.increments();
    table.string('title');
    table.text('description');
    table.integer('grantor_id')
      .references('id')
      .inTable('grantors')
      .onDelete('cascade')
      .index();
    table.integer('program_id')
      .notNullable()
      .references('id')
      .inTable('programs')
      .onDelete('cascade')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('serviceLearning');
};
