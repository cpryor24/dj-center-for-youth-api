const main = require('../controllers/main.js');
const resources = require('../controllers/resources.js')
const events = require('../controllers/events.js');
const board = require('../controllers/board.js');
const partners = require('../controllers/partners.js');
const ytvideos = require('../controllers/ytvideos.js');
const grantors = require('../controllers/grantors.js');
const programs = require('../controllers/programs.js');
const photos = require('../controllers/photos.js');
const awards = require('../controllers/awards.js');
const secondaryprograms = require('../controllers/secondaryprograms.js');

module.exports = (app) => {

  // Awards
  app.get('/', awards.index);
  app.get('/awards/:id', awards.show);
  app.post('/awards', awards.create);
  app.patch('/awards/:id', awards.update);
  app.delete('/awards/delete/:id', awards.delete);

  // Board of Directors
  app.get('/', board.index);
  app.get('/board/:id', board.show);
  app.post('/board', board.create);
  app.patch('/board/:id', board.update);
  app.delete('/board/delete/:id', board.delete);

  // Events
  app.get('/', events.index);
  app.get('/events/:id', events.show);
  app.post('/events', events.create);
  app.patch('/events/:id', events.update);
  app.delete('/events/delete/:id', events.delete);

  // Grantors
  app.get('/', grantors.index);
  app.get('/grantors/:id', grantors.show);
  app.post('/grantors', grantors.create);
  app.patch('/grantors/:id', grantors.update);
  app.delete('/grantors/delete/:id', grantors.delete);

  // Partners
  app.get('/', partners.index);
  app.get('/partners/:id', partners.show);
  app.post('/partners', partners.create);
  app.patch('/partners/:id', partners.update);
  app.delete('/partners/delete/:id', partners.delete);

  // Photos
  app.get('/', photos.index);
  app.get('/photos/:id', photos.show);
  app.post('/photos', photos.create);
  app.patch('/photos/:id', photos.update);
  app.delete('/photos/delete/:id', photos.delete);

  // Programs
  app.get('/', programs.index);
  app.get('/programs/:id', programs.show);
  app.post('/programs', programs.create);
  app.patch('/programs/:id', programs.update);
  app.delete('/programs/delete/:id', programs.delete);

  //Seccondary Programs
  app.get('/', secondaryprograms.index);
  app.get('/secondaryprograms/:id', secondaryprograms.show);
  app.post('/secondaryprograms', secondaryprograms.create);
  app.patch('/secondaryprograms/:id', secondaryprograms.update);
  app.delete('/secondaryprograms/delete/:id', secondaryprograms.delete);

  // Resources
  app.get('/', resources.index);
  app.get('/resources/:id', resources.show);
  app.post('/resources', resources.create);
  app.patch('/resources/:id', resources.update);
  app.delete('/resources/delete/:id', resources.delete);

  // Youtube
  app.get('/', ytvideos.index);
  app.get('/ytvideos/:id', ytvideos.show);
  app.post('/ytvideos', ytvideos.create);
  app.patch('/ytvideos/:id', ytvideos.update);
  app.delete('/ytvideos/delete/:id', ytvideos.delete);


}
