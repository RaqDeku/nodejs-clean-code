require('dotenv').config();
const express = require('express');
const startServer = require('./server');
const routes = require('./routes');

const port = process.env.PORT || 3000;

const start = async () => {
  const app = startServer({ express, routes });
  app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}....`);
  });
};

start();
