
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('photos').insert([
        {img_url: '', program_id: 1},
        {img_url: '', program_id: 2}
      ]);
    });
};
