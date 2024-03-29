const { MongoClient } = require('mongodb');
const { logger } = require('../../shared');

const dbUrl = process.env.DB_URL;
const dbRef = process.env.DB_REF;

const client = new MongoClient(dbUrl);
let dbInstance;

const connect = async () => {
  const conn = await client.connect();
  dbInstance = conn.db(dbRef);
  logger.info('*****Connected to Database*****');
  return dbInstance;
};

const db = () => dbInstance;

const disconnect = async () => {
  await client.close(false);
  logger.info('****Disconnected from Database****');
};

const database = Object.freeze({ connect, db, disconnect });

module.exports = database;
