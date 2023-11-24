const { joinWaitlist } = require('../controllers');
const { makeExpressCallback } = require('../../shared');

const routes = (app) => {
  app.get('/api/health', (req, res) => res.sendStatus(200));
  app.post('/api/waitlist', makeExpressCallback(joinWaitlist));
};

module.exports = routes;
