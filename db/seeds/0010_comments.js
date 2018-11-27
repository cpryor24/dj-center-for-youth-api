
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {comment: 'This is a test', photo_id: 2, user: 3},
        {comment: 'photo 1 comment', photo_id: 1, user: 4}
      ]);
    });
};
