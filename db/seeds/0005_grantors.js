
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grantors').del()
    .then(function () {
      // Inserts seed entries
      return knex('grantors').insert([
        {title: 'Youth as Resources (YAR)', description: 'Marion County, a program of United Way of Central Indiana, funds community service projects designed and implemented by Marion County youth. AR challenges youth to identify local challenges and design projects that use their skills, creativity and energy to help United Way address community needs in the areas of education, income, health and basic needs.'},
        {title: 'Generation On', description: 'Provides programs, tools and resources to engage kids and teens in service and volunteering.'},
        {title: 'IQ Solutions – Media Smart Youth', description: 'IQ Solutions applies strategic communications, science and evidence-based research, public health theory, and innovation to our blend of content and technical expertise. We use this expertise to help share knowledge that empowers audiences to improve their well-being.'},
        {title: 'Serve Indiana', description: 'Serve Indiana is a division of the Department of Workforce Development for the State of Indiana. The mission of Serve Indiana is to advance service and volunteerism by informing, connecting, and promoting opportunities and resources that enrich the lives of Hoosiers. They accomplish this mission through several programs and initiatives including AmeriCorps State, Indiana Kids, Day of Service Grants, and the Awards for Excellence Ceremony.'},
        {title: 'Youth Service America - ABC Summer Creativity', description: 'Youth Service America® delivers all programs to youth, educators, community organizations, and families through our Global Youth Service Network (GYSN) partners. The GYSN is a coalition of local, state, national, and international organizations committed to engaging children and youth as leaders through volunteering, community service, service-learning, national service, and voting/civic engagement.'},
        {title: 'Colts Foundation Grant', description: 'The Colts and 20/20 Institute provide grants for Indiana youth to complete a service project in their community. For the first time, the Indianapolis Colts and 20/20 Institute are teaming up for the Vision of the Future Grant Program. This program gives Indiana youth the opportunity to make their community a better place by providing students ages 11 through 15 the opportunity to apply for individual grants up to $1,000 to complete a service project in their area.'},
        {title: 'Davita Dialysis', description: 'We are dedicated to innovating patient care to improve our patients’ lives; to honoring and supporting our teammates, physician partners and their families; and to nurturing the neighborhoods of our growing community.'},
        {title: 'Peace First', description: 'Peace First is a non-profit organization dedicated to helping young people around the world to become powerful peacemakers by: Investing in their ideas; Providing them with tools and skills; Connecting them with other awesome young people around the world; and Sharing their stories and impact with the world.'}
      ]);
    });
};
