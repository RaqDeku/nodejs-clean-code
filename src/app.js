require('dotenv').config();
const express = require('express');
const startServer = require('./server');

(async () => {
  const app = startServer({ express });
  app.listen(3000, () => {
    console.log('App is listening....');
  });
})();
