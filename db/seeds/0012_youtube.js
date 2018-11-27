
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('youtube').del()
    .then(function () {
      // Inserts seed entries
      return knex('youtube').insert([
        {video_url: 'https://www.youtube.com/watch?v=MIf-Em7dmvw'},
        {video_url: 'https://www.youtube.com/watch?v=4z7gDsSKUmU&list=PLHjzn_bjzuq3Qo_zrXRrdHEoS5J-f8qoR'},
        {video_url: 'https://www.youtube.com/watch?v=L9AXsV3eulI'}
      ]);
    });
};
