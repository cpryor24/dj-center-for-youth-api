
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('awards').del()
    .then(function () {
      // Inserts seed entries
      return knex('awards').insert([
        {year: 2016, award_name: 'NASW-IN awarded DJ Center for Youth, Inc Community Partner of the Year'},
        {year: 2017, award_name: 'Serve Indiana awarded DJ Center for Youth, Inc for Exemplary Youth Service'}
      ]);
    });
};
