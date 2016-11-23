const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
  app.get('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signupPage);
  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
  app.get('/logout', mid.requiresLogin, controllers.Account.logout);
  app.get('/hotspotCreation', mid.requiresLogin, controllers.Hotspot.hotspotCreationPage);
  app.post('/makeHotspot', mid.requiresLogin, controllers.Hotspot.createHotspot);
  app.get('/Concerts', controllers.Hotspot.hotspotListConcert);
  app.get('/Banquets', controllers.Hotspot.hotspotListBanquet);
  app.get('/GameNight', controllers.Hotspot.hotspotListGameNight);
  app.get('/Party', controllers.Hotspot.hotspotListParty);
  app.get('/Other', controllers.Hotspot.hotspotListOther);
  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};


module.exports = router;
