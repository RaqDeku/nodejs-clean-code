const startServer = ({ express, routes, errorHandler, logger, helmet }) => {
  const app = express();
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  routes(app);

  app.use(errorHandler({ logger }));

  return app;
};

module.exports = startServer;
