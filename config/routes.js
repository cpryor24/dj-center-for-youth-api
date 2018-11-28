const main = require('../controllers/main.js');
const resources = require('../controllers/resources.js')
const events = require('../controllers/events.js');
const boardofdirectors = require('../controllers/boardofdirectors.js');
const communitypartners = require('../controllers/communitypartners.js');
const ytvideos = require('../controllers/ytvideos.js');
const grantors = require('../controllers/grantors.js');
const programs = require('../controllers/programs.js');
const photos = require('../controllers/photos.js');
const awards = require('../controllers/awards.js');
const secondaryprograms = require('../controllers/secondaryprograms.js');

module.exports = (app) => {

  // Awards
  // app.get('/', awards.index);
  app.get('/awards/:id', awards.show);
  app.post('/awards', awards.create);
  app.patch('/awards/edit/:id', awards.update);
  app.delete('/awards/delete/:id', awards.delete);

  // Board of Directors
  app.get('/boardofdirectors', boardofdirectors.index);
  app.get('/boardofdirectors/:id', boardofdirectors.show);
  app.post('/boardofdirectors', boardofdirectors.create);
  app.patch('/boardofdirectors/edit/:id', boardofdirectors.update);
  app.delete('/boardofdirectors/delete/:id', boardofdirectors.delete);

  // Events
  app.get('/events', events.index);
  app.get('/events/:id', events.show);
  app.post('/events', events.create);
  app.patch('/events/edit/:id', events.update);
  app.delete('/events/delete/:id', events.delete);

  // Grantors
  app.get('/grantors', grantors.index);
  app.get('/grantors/:id', grantors.show);
  app.post('/grantors', grantors.create);
  app.patch('/grantors/edit/:id', grantors.update);
  app.delete('/grantors/delete/:id', grantors.delete);

  // Partners
  app.get('/communitypartners', communitypartners.index);
  app.get('/communitypartners/:id', communitypartners.show);
  app.post('/communitypartners', communitypartners.create);
  app.patch('/communitypartners/edit/:id', communitypartners.update);
  app.delete('/communitypartners/delete/:id', communitypartners.delete);

  // Photos
  // app.get('/', photos.index);
  app.get('/photos/:id', photos.show);
  app.post('/photos', photos.create);
  app.patch('/photos/edit/:id', photos.update);
  app.delete('/photos/delete/:id', photos.delete);

  // Programs
  app.get('/', programs.index);
  app.get('/programs/:id', programs.show);
  app.post('/programs', programs.create);
  app.patch('/programs/edit/:id', programs.update);
  app.delete('/programs/delete/:id', programs.delete);

  //Seccondary Programs
  app.get('/', secondaryprograms.index);
  app.get('programs/:secondaryprograms/:id', secondaryprograms.show);
  app.post('programs/add/:secondaryprograms', secondaryprograms.create);
  app.patch('programs/:secondaryprograms/edit/:id', secondaryprograms.update);
  app.delete('programs/:secondaryprograms/delete/:id', secondaryprograms.delete);

  // Resources
  app.get('/resources', resources.index);
  app.get('/resources/:id', resources.show);
  app.post('/resources', resources.create);
  app.patch('/resources/edit/:id', resources.update);
  app.delete('/resources/delete/:id', resources.delete);

  // Youtube
  app.get('/ytvideos', ytvideos.index);
  app.get('/ytvideos/:id', ytvideos.show);
  app.post('/ytvideos', ytvideos.create);
  app.patch('/ytvideos/edit/:id', ytvideos.update);
  app.delete('/ytvideos/delete/:id', ytvideos.delete);


}
