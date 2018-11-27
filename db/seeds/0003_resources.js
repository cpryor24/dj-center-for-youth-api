
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {business_name: '211 Helpline', url: 'www.connect2help211.org'},
        {business_name: 'Adult and Child', url: 'https://adultandchild.org'},
        {business_name: 'Aspire Indiana', url: 'https://www.aspireindiana.org'},
        {business_name: 'Aunt Bertha', url: 'www.auntbertha.com'},
        {business_name: 'Brooke’s Place', url: 'https://www.brookesplace.org'},
        {business_name: 'Centerpointe Community Based Services', url: 'https://www.resolutetreatmentcenter.com'},
        {business_name: 'Children’s Bureau', url: 'https://www.childrensbureau.org'},
        {business_name: 'Child Care Finder', url: 'www.in.gov/fssa/childcarefinder'},
        {business_name: 'Coburn Place', url: 'http://coburnplace.org'},
        {business_name: 'Crisis Line', url: 'www.crisistextline.org'},
        {business_name: 'Emberwood Center', url: 'https://www.emberwoodcenter.org'},
        {business_name: 'EmployIndy', url: 'https://employindy.org'},
        {business_name: 'Families First', url: 'https://www.familiesfirstindiana.org'},
        {business_name: 'Indianapolis Art Studio', url: 'https://www.indplsartcenter.org/open_studio'},
        {business_name: 'Indiana Coalition against Domestic Violence', url: 'http://www.icadvinc.org'},
        {business_name: 'Indiana Coalition to End Sexual Assault', url: 'https://indianacesa.org'},
        {business_name: 'Indiana State Department of Health (MCM Mom’s Helpline)', url: 'www.in.gov/isdh/21047.htm'},
        {business_name: 'Indiana Transgender Network', url: 'http://indianatransgendernetwork.com'},
        {business_name: 'Indiana Youth Group', url: 'http://www.indianayouthgroup.org'},
        {business_name: 'Indianapolis Public Library', url: 'http://www.indypl.org'},
        {business_name: 'La Plaza', url: 'http://www.laplazaindy.org'},
        {business_name: 'Latino Coalition against Domestic and Sexual Violence', url: 'http://www.indianalatinocoalition.org'},
        {business_name: 'Marion County Commission on Youth (MCCOY)', url: 'www.mccoyouth.org'},
        {business_name: 'Mental Health of America', url: 'http://www.mentalhealthamerica.net'},
        {business_name: 'National Youth Advocate Program', url: 'http://www.nyap.org'},
        {business_name: 'Nurse-Family Partnership', url: 'www.nursefamilypartnership.org'},
        {business_name: 'Positive Pathways', url: 'http://www.positivepathways.net'},
        {business_name: 'Quest Staffing', url: 'www.queststaffingjobs.com'},
        {business_name: 'Reach for Youth', url: 'http://www.reachforyouth.org'},
        {business_name: 'Safe Families for Children', url: 'https://safe-families.org'},
        {business_name: 'Stopover, Inc', url: 'https://stopoverinc.org'},
        {business_name: 'Suicide Prevention Resource Center – Community Health Network', url: 'https://www.sprc.org/grantees/indiana-community-health-network-2'},
        {business_name: 'The Julian Center', url: 'https://www.juliancenter.org'},
        {business_name: 'Work One', url: 'https://workoneindy.org/getstarted/index.html'}
      ]);
    });
};
