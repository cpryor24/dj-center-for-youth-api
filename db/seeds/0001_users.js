
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Devina', last_name: 'Jani', email: 'djcenterforyouth@yahoo.com', password: '123456', role: 'admin'},
        {first_name: 'Chris', last_name: 'Pryor', email: 'chrispryor@live.com', password: '123456', role: 'admin'},
        {first_name: 'Jim', last_name: 'Williams', email: 'jw@yahoo.com', password: '123456', role: 'user'},
        {first_name: 'Carl', last_name: 'Smith', email: 'cs@yahoo.com', password: '123456', role: 'user'}
      ]);
    });
};
