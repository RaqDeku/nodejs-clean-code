const startServer = ({ express, routes }) => {
  const app = express();
  app.use(express.json());

  routes(app);
  return app;
};

module.exports = startServer;
