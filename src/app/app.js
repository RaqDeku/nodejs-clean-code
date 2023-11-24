require('dotenv').config();
const express = require('express');
const startServer = require('./server');
const routes = require('./routes');
const { queueClient, errorHandler, logger } = require('../shared');
const { subscribeToMessageBus } = require('../modules');

const port = process.env.PORT || 3000;

const start = async () => {
  const app = startServer({
    express,
    routes,
    errorHandler,
    logger,
  });

  await queueClient.connectProducer();

  await queueClient.connectConsumer();

  await subscribeToMessageBus();

  app.listen(port, () => {
    logger.info(`App is listening on http://localhost:${port}....`);
  });
};

start();
