const models = require('../models');

const Hotspot = models.Hotspot;

const hotspotCreationPage = (req, res) => {
  res.render('hotspotCreation', { csrfToken: req.csrfToken() });
};

const hotspotListPageConcerts = (req, res) => {
  Hotspot.HotspotModel.findByCategory('Concert', (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred' });
    }
    return res.render('hotspotListings', { csrfToken: req.csrfToken(), hotspots: docs });
  });
};

const hotspotListPageBanquets = (req, res) => {
  Hotspot.HotspotModel.findByCategory('Banquet', (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred' });
    }
    return res.render('hotspotListings', { csrfToken: req.csrfToken(), hotspots: docs });
  });
};

const hotspotListPageGameNights = (req, res) => {
  Hotspot.HotspotModel.findByCategory('Game Night', (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred' });
    }
    return res.render('hotspotListings', { csrfToken: req.csrfToken(), hotspots: docs });
  });
};

const hotspotListPageParties = (req, res) => {
  Hotspot.HotspotModel.findByCategory('Party', (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred' });
    }
    return res.render('hotspotListings', { csrfToken: req.csrfToken(), hotspots: docs });
  });
};

const hotspotListPageOther = (req, res) => {
  Hotspot.HotspotModel.findByCategory('Other', (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred' });
    }
    return res.render('hotspotListings', { csrfToken: req.csrfToken(), hotspots: docs });
  });
};


const createHotspot = (req, res) => {
  if (!req.body.name || !req.body.date || !req.body.category) {
    return res.status(400).json({ error: 'Error: Hotspot name, date, and category are required' });
  }

  const hotspotData = {
    name: req.body.name,
    date: req.body.date,
    category: req.body.category,
    hotspotCreator: req.session.account._id,
    description: req.body.description,
  };

  const newHotspot = new Hotspot.HotspotModel(hotspotData);

  return newHotspot.save((err) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occured' });
    }

    return res.json({ redirect: '/GameNight' });
  });
};

module.exports.hotspotCreationPage = hotspotCreationPage;
module.exports.createHotspot = createHotspot;
module.exports.hotspotListConcert = hotspotListPageConcerts;
module.exports.hotspotListBanquet = hotspotListPageBanquets;
module.exports.hotspotListGameNight = hotspotListPageGameNights;
module.exports.hotspotListParty = hotspotListPageParties;
module.exports.hotspotListOther = hotspotListPageOther;
