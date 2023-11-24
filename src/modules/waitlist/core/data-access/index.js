const { MongoClient } = require('mongodb');
const makeWaitlistDb = require('./db');

const url = process.env.DB_URL;
const dbRef = process.env.DB_REF;

const client = new MongoClient(url);

async function connectDb() {
  await client.connect();
  return client.db(dbRef);
}

const waitlistDb = makeWaitlistDb({ connectDb });
module.exports = waitlistDb;
