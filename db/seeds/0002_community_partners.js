
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('communityPartners').del()
    .then(function () {
      // Inserts seed entries
      return knex('communityPartners').insert([
        {company_name: 'American Diabetes Association', url: 'http://www.diabetes.org'},
        {company_name: 'American Heart Association', url: 'https://www.heart.org'},
        {company_name: 'Bishop Chatard High School, Student Union', url: 'https://www.bishopchatard.org/arts/clubs'},
        {company_name: 'Crispus Attucks Medical Magnet High School', url: 'https://schools.myips.org/crispusattucks'},
        {company_name: 'Gifted Art by Kevin West', url: 'http://images2art.com'},
        {company_name: 'Indiana Criminal Justice Institute, Traffic Safety Division', url: 'https://www.in.gov/cji/2329.htm'},
        {company_name: 'Indiana Disproportionality Committee', url: 'https://indianadisproportionalitycommittee.weebly.com'},
        {company_name: 'Indiana Minority Health Coalition, Inc', url: 'www.imhc.org'},
        {company_name: 'IU School of Social Work', url: 'https://socialwork.iupui.edu'},
        {company_name: 'IU Women’s of Excellence', url: 'https://medicine.iu.edu/departments/obgyn/clinical-care/womens-health-center'},
        {company_name: 'Jefferson Awards Foundation, Students in Action', url: 'http://studentsinaction.jeffersonawards.org'},
        {company_name: 'Jobs for America’s Graduates', url: 'www.jag.org'},
        {company_name: 'Lilly Boys and Girls Club', url: 'http://bgcindy.org/lilly'},
        {company_name: 'Minority Health Partners', url: ''},
        {company_name: 'Mt. Carmel Baptist Church', url: 'http://mtcarmelindy.org'},
        {company_name: 'Office of Minority Health', url: 'https://www.in.gov/isdh/23551.htm'},
        {company_name: 'Playful Soul in Broad Ripple', url: 'http://theplayfulsoul.com'},
        {company_name: 'Prevent Child Abuse Indiana', url: 'http://pcain.org'},
        {company_name: 'Studio G', url: 'https://www.studiog2012.com'},
        {company_name: 'Too Much Dance Company', url: 'https://toomuchdance.com'},
        {company_name: 'University of Indianapolis', url: 'https://www.uindy.edu'},
        {company_name: 'Youth as Resources, United Way of Central Indiana', url: 'https://uwci.org'}
      ]);
    });
};
