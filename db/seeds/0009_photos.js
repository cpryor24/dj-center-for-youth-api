
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('photos').insert([
        {img_url: 'https://www.facebook.com/163334360369281/photos/a.538315902871123/590640074305372/?type=3&theater', secondaryProgram_id: 1},
        {img_url: 'https://www.facebook.com/163334360369281/photos/a.1649316628437706/1649317128437656/?type=3&theater', secondaryProgram_id: 2}
      ]);
    });
};
