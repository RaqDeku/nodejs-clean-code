const startServer = ({
  express, routes, errorHandler, logger,
}) => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  routes(app);

  app.use(errorHandler({ logger }));

  return app;
};

module.exports = startServer;
