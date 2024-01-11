require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const routes = require('./routes');
const startServer = require('./server');
const { queueClient, errorHandler, logger } = require('../shared');
const subscribeToMessageQueue = require('./subscribers');
const database = require('./db/index');

const port = process.env.PORT || 3000;

const start = async () => {
  const app = startServer({
    express,
    routes,
    errorHandler,
    helmet,
    logger,
  });

  console.time('start-up Time:');
  await Promise.all([
    await queueClient.connectProducer(),
    await queueClient.connectConsumer(),
    await database.connect(),
  ]);

  await subscribeToMessageQueue();
  console.timeEnd('start-up Time:');
  const server = app.listen(port, () => {
    logger.info(`App is listening on http://localhost:${port}....`);
  });

  const KILL_SIGNALS = ['SIGINT', 'SIGTERM', 'uncaughtExpection'];

  KILL_SIGNALS.forEach((signal) => {
    process.on(signal, () => {
      logger.info(`${signal} Triggered!`);
      server.close(async () => {
        logger.info('Gracefully Shutting Down Server....');
        await Promise.all([
          await database.disconnect(),
          await queueClient.disconnectConsumer(),
          await queueClient.disconnectProducer(),
        ]);
        logger.info('########Server Shut Down##########');
        process.exit(0);
      });
    });
  });
};

start();
