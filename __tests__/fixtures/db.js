const { MongoClient } = require('mongodb');

let connection;
let db;

async function connectDb() {
  // global.__MONGOD__
  connection = new MongoClient('mongodb://127.0.0.1:49680/', {
    useNewUrlParser: true,
  });

  db = connection.db(global.__MONGOD_DB_NAME__);
  return db;
}

async function closeDB() {
  await connection.close();
  await db.close();
}

async function clearDB() {
  await db.collection('waitlist').deleteMany({});
  return true;
}

module.exports = {
  db,
  connection,
  connectDb,
  clearDB,
  closeDB,
};
