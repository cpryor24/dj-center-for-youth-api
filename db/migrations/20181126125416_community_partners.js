
exports.up = function(knex, Promise) {
  return knex.schema.createTable('communityPartners', (table) => {
    table.increments();
    table.string('company_name').unique();
    table.text('url');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('communityPartners');
};
