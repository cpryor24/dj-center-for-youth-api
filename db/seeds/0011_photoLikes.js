
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photoLikes').del()
    .then(function () {
      // Inserts seed entries
      return knex('photoLikes').insert([
        {likes: 1, photo_id: 1 },
        {likes: 1, photo_id: 2 },
        {likes: 1, photo_id: 1 }
      ]);
    });
};
