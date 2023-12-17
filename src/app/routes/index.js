const { joinWaitlist, sendSuggestionMessage } = require('../controllers');
const { makeExpressCallback } = require('../../shared');

const routes = (app) => {
  app.get('/api/health', (req, res) => res.sendStatus(200));
  app.post('/api/v1/waitlist', makeExpressCallback(joinWaitlist));
  app.post('/api/v1/message', makeExpressCallback(sendSuggestionMessage));
};

module.exports = routes;
