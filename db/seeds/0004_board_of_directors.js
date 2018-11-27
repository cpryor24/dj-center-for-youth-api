
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('boardOfDirectors').del()
    .then(function () {
      // Inserts seed entries
      return knex('boardOfDirectors').insert([
        {first_name: 'Devendra', last_name: 'Jani', title: 'Chair'},
        {first_name: 'Nessa', last_name: 'Rose', title: 'Vice-Chair'},
        {first_name: 'Angela', last_name: 'Schuck', title: 'Secretary'},
        {first_name: 'Maria', last_name: 'Holland-Butler', title: 'Treasurer'},
        {first_name: 'Kareema', last_name: 'Boykin', title: 'Board'},
        {first_name: 'Daion', last_name: 'Butler', title: 'Board'},
        {first_name: 'Alexandria', last_name: 'Edmonds', title: 'Board'},
        {first_name: 'Jalyn', last_name: 'Twyman', title: 'Board'},
        {first_name: 'Charmaine', last_name: 'Wardell', title: 'Board'},
        {first_name: 'LaToya', last_name: 'Robertson', title: 'Board'},
        {first_name: 'Shital', last_name: 'Patel', title: 'Advisory Board'},
        {first_name: 'Reena', last_name: 'Patel', title: 'Advisory Board'}
      ]);
    });
};
