const { MongoClient } = require('mongodb');
const makeWaitlistDb = require('./waitlist-db');

const url = process.env.DB_URL;
const dbRef = process.env.DB_REF;

const client = new MongoClient(url, { useNewUrlParser: true });

async function connectDb() {
  try {
    await client.connect();
    return client.db(dbRef);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

const waitlistDb = makeWaitlistDb({ connectDb });
module.exports = waitlistDb;
