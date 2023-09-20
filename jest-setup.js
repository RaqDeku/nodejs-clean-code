// eslint-disable-next-line import/no-extraneous-dependencies
const { MongoMemoryServer } = require('mongodb-memory-server');
const path = require('path');
const fs = require('fs');

const globalConfigPath = path.join(__dirname, 'globalConfigMongo.json');

module.exports = async () => {
  let mongod = global.__MONGOD__;

  if (!mongod) {
    mongod = await MongoMemoryServer.create();
  }

  const mongoConfig = {
    mongodbName: 'jest',
    mongoUrl: await mongod.getUri(),
  };

  fs.writeFileSync(globalConfigPath, JSON.stringify(mongoConfig));

  global.__MONGOD__ = mongod;
};
