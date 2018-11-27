
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {title: 'THE REUNION', description: 'dance competition', img_url: 'Reunion_Jan_2019.png', date: '2019/01/12', time: '4:00pm', venue: 'The Silver Centre Event Hall', address: '10202 E. Washington St. Ste 300 Indianapolis, IN 46229', isActive: true},
        {title: 'BRING IT ON DANCE', description: 'dance competition', img_url: 'Bring_It_On_April_2019.png', '2019/04/20', time: '12:00pm', venue: 'Warren Central HS', address: '', isActive: true}
      ]);
    });
};
