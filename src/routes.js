const { joinWaitlist } = require('./controllers/index');

const routes = (app) => {
  app.get('/health', (req, res) => res.sendStatus(200));
  app.post('/api/waitlist', joinWaitlist);
};

module.exports = routes;
