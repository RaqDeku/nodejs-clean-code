const { MongoClient } = require('mongodb');
const makeWaitlistDb = require('./db');
const { logger } = require('../../../../shared');

const url = process.env.DB_URL;
const dbRef = process.env.DB_REF;

const client = new MongoClient(url);

let dbInstance;

(async () => {
  const conn = await client.connect();
  dbInstance = conn.db(dbRef);
  logger.info('Connected to Database...');
  // return client;
})();

const db = () => dbInstance;

const waitlistDb = makeWaitlistDb({ db });
module.exports = waitlistDb;
