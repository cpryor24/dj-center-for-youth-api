
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('programs').del()
    .then(function () {
      // Inserts seed entries
      return knex('programs').insert([
        {title: 'Hot Mama Squad', description: 'An array of scheduled outings for/by participant parents and/or guardians to offer opportunities for self-care.'},
        {title: 'Mentorship', description: 'Older/more seasoned youth are paired with younger youth so they establish rapport and a peer support system amongst each other.'},
        {title: 'Scholarship', description: 'Juniors and Seniors in High School are able to apply annually for a $100-$200 award to offset costs for discretionary items related to further vocational and/or academic education.'},
        {title: 'Service Learning', description: 'Youth-adult mentorship through service learning projects as we strive to focus learning that actively involves students in a wide range of experiences, benefitting others and the community, while integrating arts and academics of specified goals of a given curriculum.'},
        {title: 'Volunteerism', description: 'Open to both youth and adults that are interested in donating time and talent to serving the greater good and positively contributing to the well-being of individuals and communities.'}
      ]);
    });
};
